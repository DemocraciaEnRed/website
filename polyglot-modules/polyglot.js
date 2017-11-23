import Polyglot from 'node-polyglot'

const polyglot =  new Polyglot()

const t = (key) => {
  return polyglot.t(key)
}

export { polyglot, t }