import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import Head from 'next/head'
import es from '../translations/es'
import Layout from '../layouts/Layout'
import Header from '../sections/index/containers/Header'
import AboutUs from '.../sections/index/containers/AboutUs'
import CaseStudies from '../sections/index/containers/CaseStudies'
import Collaborate from '../sections/index/containers/Collaborate'
import Ebooks from '../sections/index/containers/Ebooks'
import Media from '../sections/index/containers/Media'
import WhoWeAre from '../sections/index/containers/WhoWeAre'
import Publications from '../sections/index/containers/Publications'
import Footer from '../sections/index/containers/Footer'

class Index extends Component {
  constructor (props) {
    super(props)
    polyglot.extend(es)
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
          <Footer />
        </Layout>
      </div>
    )
  }
}

export default Index