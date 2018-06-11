import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import { t } from '../polyglot-modules/polyglot.js'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../containers/Header'
import WhatWeDo from '../sections/what-we-do/containers/What-we-do'
import SectionMilestone from '../sections/what-we-do/containers/SectionMilestone'
import Content from '../sections/what-we-do/containers/Content'
import DemocracyOs from '../sections/what-we-do/components/DemocracyOs'
import CivicStack from '../sections/what-we-do/components/CivicStack'
import HechaLaLey from '../sections/what-we-do/components/HechaLaLey'
import Sole from '../sections/what-we-do/components/Sole'
import DebatirEnRedes from '../sections/what-we-do/components/DebatirEnRedes'
import Rinp from '../sections/what-we-do/components/Rinp'
import Clip from '../sections/what-we-do/components/Clip'
import Footer from '../containers/Footer'

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
            title={t('what-we-do.title')}
            bg={'../static/assets/header/headerWeb.jpg'} />
          <SectionMilestone 
            title={t('what-we-do.openGov.title')} 
            text={t('what-we-do.openGov.subtitle')}
            icon={t('what-we-do.openGov.icon')}  
          />
          <Content>
            <DemocracyOs />
            <CivicStack />
            <HechaLaLey />
          </Content>
          <SectionMilestone 
            title={t('what-we-do.education.title')} 
            text={t('what-we-do.education.subtitle')} 
            icon={t('what-we-do.education.icon')}
          />
          <Content>
            <Sole />
            <DebatirEnRedes />
          </Content>
          <SectionMilestone 
            title={t('what-we-do.leadership.title')} 
            text={t('what-we-do.leadership.subtitle')} 
            icon={t('what-we-do.leadership.icon')} 
          />
          <Content>
            <Rinp />
            <Clip />
          </Content>
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
