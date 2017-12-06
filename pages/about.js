import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import { t } from '../polyglot-modules/polyglot.js'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../sections/about/containers/Header'
import AboutUs from '../sections/about/containers/AboutUs'
import LangBar from '../components/LangBar'
import SectionMilestone from '../sections/about/containers/SectionMilestone'
import Content from '../sections/about/containers/Content'
import DemocracyOs from '../sections/about/components/DemocracyOs'
import CivicStack from '../sections/about/components/CivicStack'
import HechaLaLey from '../sections/about/components/HechaLaLey'
import Sole from '../sections/about/components/Sole'
import Rinp from '../sections/about/components/Rinp'
import Clip from '../sections/about/components/Clip'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLang : ''
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
  }

  componentDidMount () {
    const lang = localStorage.getItem('lang')
    if (lang === null || lang !== polyglot.currentLocale) {
      this.changeLang('en')
    }
  }

  changeLang = (lang) => {
    const newLang = lang === 'es' ? es : en
    polyglot.extend(newLang) 
    polyglot.locale(newLang.language)
    this.setState({currentLang: lang})
  }
  
  render () {
    return (
      <div>
        <Layout changeLang={this.changeLang}>
          <Header />
          <AboutUs />
          <SectionMilestone 
            title={t('aboutUs.openGov.title')} 
            text={t('aboutUs.openGov.subtitle')}
            icon={t('aboutUs.openGov.icon')}  
          />
          <Content>
            <DemocracyOs />
            <CivicStack />
            <HechaLaLey />
          </Content>
          <SectionMilestone 
            title={t('aboutUs.education.title')} 
            text={t('aboutUs.education.subtitle')} 
            icon={t('aboutUs.education.icon')}
          />
          <Content>
            <Sole />
          </Content>
          <SectionMilestone 
            title={t('aboutUs.leadership.title')} 
            text={t('aboutUs.leadership.subtitle')} 
            icon={t('aboutUs.leadership.icon')} 
          />
          <Content>
            <Rinp />
            <Clip />
          </Content>
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
