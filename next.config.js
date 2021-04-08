const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    env: {
        ga_code: 'UA-118262366-1',
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about' : {  page: '/about' },
            '/what-we-do' : {  page: '/what-we-do' },
            '/contact' : {  page: '/contact' },
            '/jobs' : {  page: '/jobs' },
            '/apply' : { page: '/apply' },
            '/backend' : { page: '/backend'},
            '/transparency': { page: '/transparency'}
        }
    }
}