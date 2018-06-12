const mailgun = require('mailgun-js')
const request = require('request')
const jwt = require('jsonwebtoken')
const cache = require('memory-cache')
const path = require('path')
const confirmarTemplate = require('./email-templates/confirmar')
const contactoTemplate = require('./email-templates/contacto')
const trabajoTemplate = require('./email-templates/trabajo')

const {
  MAILGUN_DOMAIN,
  MAILGUN_API_KEY,
  MAILGUN_PUBLIC_KEY,
  JWT_SECRET,
  HOST
} = process.env

const mg = mailgun({
  domain: MAILGUN_DOMAIN,
  apiKey: MAILGUN_API_KEY,
  publicApiKey: MAILGUN_PUBLIC_KEY
})

function mandarConfirmacion (req, res, next) {
  if (!req.body.email) return res.status(400).json({ error: 'no-email' })
  return new Promise(function (resolve, reject) {
    mg.validate(req.body.email, (error, validation) => {
      if (error) return reject(error)
      if (!validation.is_valid) return reject('invalid-email')
      resolve(validation.address)
    })
  })
  .then(mail => estaSubscripto(mail))
  .then(mail => {
      const token = jwt.sign({ mail }, JWT_SECRET, { expiresIn: 60 * 60 * 24 * 2 })
      cache.put(mail, token, 1000 * 60 * 60 * 24 * 2)
      return new Promise(function (resolve, reject) {
        mg.messages()
          .send({
            from: "Democracia en Red <no-reply@democraciaenred.org>",
            to: [ mail ],
            subject: "Confirma tu email",
            text: `Valida tu mail ingresando a ${HOST}/validar-email?token=${token}`,
            html: confirmarTemplate(token)
          }, function (error, body) {
            if (error) return reject(error)
            resolve(body)
          })
        })
      })
    .then(msg => {
      res.status(200).end()
    })
    .catch(error => {
      if (error !== 'invalid-email' && error !== 'is-in-list') return next(error)

      res.status(400).json({ error })
    })
}

function estaSubscripto (mail) {
  return new Promise(function (resolve, reject) {
    mg.lists('novedades@mg.democraciaenred.org').members(mail)
      .info(function (error, body) {
        if (!error) return reject('is-in-list')
        if (error && error.statusCode === 404) return resolve(mail)
        reject(error)
      })
  })
}

function agregarEmail (req, res, next) {
  jwt.verify(req.query.token, JWT_SECRET, function(err, decoded) {
    if (err) return res.redirect(301, `${HOST}?subscripto=false`)

    const savedToken = cache.get(decoded.mail)
    if (!savedToken || savedToken !== req.query.token) return res.redirect(301, `${HOST}?subscripto=false`)

    mg.lists('novedades@mg.democraciaenred.org').members()
      .create({ address: decoded.mail }, function (error, body) {
        if (error) return next(error)
        cache.del(decoded.mail)
        res.redirect(301, `${HOST}?subscripto=true`)
      })
  })
}

function mailContacto (req, res, next) {
  if (!['name', 'email'].every(k => ~Object.keys(req.body).indexOf(k))) return res.status(400).json({ error: 'missing-params' })
  mg.validate(req.body.email, (error, validation) => {
    if (error) return next(error)
    if (!validation.is_valid) return res.status(400).json({ error: 'invalid-email' })

    mg.messages()
      .send({
        from: 'no-reply@democraciaenred.org',
        to: 'contacto@mg.democraciaenred.org',
        subject: 'Contacto democraciaenred.org',
        text: contactoTemplate(req.body)
      }, function (error, body) {
        if (error) return next(error)
        res.status(200).end()
      })
  })
}

function mailTrabajo (req, res, next) {
  if (!['name', 'email', 'phone', 'id'].every(k => ~Object.keys(req.body).indexOf(k))) return res.status(400).json({ error: 'missing-params' })
  mg.validate(req.body.email, (error, validation) => {
    if (error) return next(error)

    let message = {
      from: 'no-reply@democraciaenred.org',
      to: 'trabajos@mg.democraciaenred.org',
      subject: 'Trabajos democraciaenred.org',
      text: trabajoTemplate(req.body)
    }

    if (req.file) {
      const cv = new mg.Attachment({
        data: req.file.buffer,
        filename: `CV${path.extname(req.file.originalname)}`,
        contentType: req.file.mimetype,
        knownLenght: req.file.size
      })

      message.attachment = cv
    }

    mg.messages()
      .send(message, function (error, body) {
        if (error) return next(error)
        res.status(200).end()
      })
    })
}

function mailTrabajoError (err, req, res, next) {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'file-too-big' })
  }
  next(err)
}

module.exports = {
  mandarConfirmacion,
  agregarEmail,
  mailContacto,
  mailTrabajo,
  mailTrabajoError
}