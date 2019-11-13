Democracia en Red
=================

Organization website for the Democracia en Red foundation

---

Para correr el front local:
```
npm ci
npm run devi
```

(el comando [`ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) instala directo del `package-lock.json`, las siglas son de *continuous integration*)

Para correr con la api:
```
export MAILGUN_API_KEY=-
export MEDIUM_URL=https://medium.com/multitudes
export MEDIUM_URL_CASOS=https://medium.com/multitudes/casos/home
npm run dev
```
