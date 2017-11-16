import Head from 'next/head'
import Layout from '../layouts/Layout'
import Header from '../containers/Header'
import AboutUs from '../containers/AboutUs'
import CaseStudies from '../containers/CaseStudies'
import Collaborate from '../containers/Collaborate'
import Ebooks from '../containers/Ebooks'
import Media from '../containers/Media'
import WhoWeAre from '../containers/WhoWeAre'
import Publications from '../containers/Publications'

export default () => (
  <div>
    <Head>
      <title>Democracia en Red</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
      <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
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