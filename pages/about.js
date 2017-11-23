import Head from 'next/head'
import Layout from '../layouts/Layout'
import Header from '../sections/about/containers/Header'
import AboutUs from '../sections/about/containers/AboutUs'
import SectionMilestone from '../sections/about/containers/SectionMilestone'

const About = () => (
  <div>
    <Head>
      <title>Democracia en Red</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Layout>
      <Header />
      <AboutUs />
      <SectionMilestone title='Abrir el gobierno' text='Participación ciudadana facilitada por la tecnología.' />
      <SectionMilestone title='Repensar la educación' text='Nuevas didácticas y pedagogía educativa.' />
      <SectionMilestone title='Promover liderazgos' text='Redes regionales de proyectos político-sociales. ' />
    </Layout>
    <style jsx>{`
      section {
        padding-left: 100px;
        padding-right: 100px;
      }
    `}</style>
  </div>
)

export default About