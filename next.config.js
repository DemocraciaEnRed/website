const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
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