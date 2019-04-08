import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import { t } from '../polyglot-modules/polyglot.js'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../containers/Header'
import Content from '../sections/transparency/containers/Content'
import Footer from '../containers/Footer'
import DoughnutGraphic  from "../sections/transparency/containers/DoughnutGraphic"
import VerticalBars from "../sections/transparency/containers/VerticalBars"
import HorizontalBars from "../sections/transparency/containers/HorizontalBars"


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
            title={t('transparency.header')}
            bg={'../static/assets/header/headerWeb.jpg'} />
          <Content icon={t('transparency.logo')}/>
          <DoughnutGraphic />
          <VerticalBars />
          <HorizontalBars />
          <Footer />
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
