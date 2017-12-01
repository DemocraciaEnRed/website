import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Head from 'next/head'
import Layout from '../layouts/Layout'
import Header from '../sections/index/containers/Header'
import LangBar from '../components/LangBar'
import AboutUs from '../sections/index/containers/AboutUs'
import CaseStudies from '../sections/index/containers/CaseStudies'
import Collaborate from '../sections/index/containers/Collaborate'
import Ebooks from '../sections/index/containers/Ebooks'
import Media from '../sections/index/containers/Media'
import WhoWeAre from '../sections/index/containers/WhoWeAre'
import Publications from '../sections/index/containers/Publications'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      changeLanguage: false
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
  }

  componentDidMount () {
    const lang = localStorage.getItem('lang')
    if (lang !== null && lang !== polyglot.currentLocale) {
      lang === 'es' ? polyglot.extend(es) : polyglot.extend(en)
      this.changeState()
    }
  }

  changeState = () => {
    this.setState({
      changeLanguage: !this.state.changeLanguage
    })
  }

  render () {
    return (
      <div>
        <Head>
          <title>Democracia en Red</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
          <link rel="stylesheet" type="text/css" href="/static/global.css" />
        </Head>
        <Layout>
          <Header />
          <AboutUs />
          <CaseStudies />
          <Collaborate />
          <Publications />
          <Ebooks />
          <Media />
          <WhoWeAre />
        </Layout>
      </div>
    )
  }
}
