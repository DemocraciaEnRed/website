import Head from 'next/head'
import Layout from '../layouts/Layout'

export default () => (
  <div>
    <Head>
      <title>Democracia en Red</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Layout>
      <section>
        <h1>Helloooooooo wooorld</h1>
        <button className='btn'><span className='action-text'>Haz click!</span></button>
      </section>
    </Layout>
  </div>
  )