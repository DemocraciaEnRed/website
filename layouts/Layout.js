import Head from 'next/head'
import Navbar from '../containers/Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>Democracia en Red</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="favicon" href="/static/assets/icons/der-favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Navbar 
      changeLang={props.changeLang}
      currentLang={props.currentLang}
    />
    {props.children}
  </div>
)

export default Layout