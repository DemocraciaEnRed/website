const request = require('request')
const moment = require('moment')

function getPublicaciones (req, res) {
  getMedium()
    .then(mediumResponse => {
      res.json(parsePublicaciones(mediumResponse, req.query.lang))
    })
    .catch(err => {
      console.log(err)
      res.status(500).end()
    })
  
}

function getPublicacionesLu(req, res) {
  getMediumLuPost()
    .then(luPost => {
      res.json(luPost, req)
    })
  .catch(err => {
    console.log(err)
    res.status(500).end()
  })
}

function getMedium (tag) {
  return new Promise(function (resolve, reject) {
    request({
      url: `${process.env.MEDIUM_URL}?format=json&limit=4`,
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        let jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''))
        resolve(jsonBody)
      } else {
        reject(error || response.statusCode)
      }
    })
  })
}

function getMediumLuPost() {
  return new Promise(function(resolve, reject){
    request({
      url: `https://medium.com/@luciana.vegaf/latest?format=json` ,
      json: true
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(console.log(body))
      } else {
        reject(error || response.statusCode)
      }
    }
    )
  })
}

function parsePublicaciones (mediumResponse, lang) {
  const posts = Object.values(mediumResponse.payload.references.Post)
  let locale = 'es'

  if (lang === 'en') locale = 'en'
  moment.locale(locale)
  return posts.map(p => (
    {
    
    url: `${process.env.MEDIUM_URL}/${p.uniqueSlug}`,
    title: p.title,
    claps: p.virtuals.totalClapCount,
    createdAt: moment(p.createdAt).format('LT, dddd'),
    image: p.virtuals.previewImage.imageId && `https://cdn-images-1.medium.com/fit/t/370/300/${p.virtuals.previewImage.imageId}`
  }))
}

module.exports = { getPublicaciones, getPublicacionesLu }