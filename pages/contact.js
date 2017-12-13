import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import { t } from '../polyglot-modules/polyglot.js'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Header from '../containers/Header'
import Layout from '../layouts/Layout'
import ContactWrapper from '../sections/contact/containers/ContactWrapper'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLang : 'es'
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
  }

  componentDidMount () {
    const lang = localStorage.getItem('lang')
    if (lang === null) {
      localStorage.setItem('lang', 'es')
    } else if (lang !== polyglot.currentLocale) {
      this.changeLang('en')
    }
  }

  changeLang = (lang) => {
    const newLang = lang === 'es' ? es : en
    polyglot.extend(newLang) 
    polyglot.locale(newLang.language)
    localStorage.setItem('lang', lang)
    this.setState({currentLang: lang})
  }
  
  render () {
    return (
      <div>
        <Layout 
          changeLang={this.changeLang}
          currentLang={this.state.currentLang} >
          <Header 
            title='CONTACTO'
            bg={'../static/assets/header/headerAbout.jpg'} />
            <ContactWrapper />
        </Layout>
        <style jsx>{`
          section {
            padding-left: 100px;
            padding-right: 100px;
          }
        `}</style>
      </div>
    )
  }
}
