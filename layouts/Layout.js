import Head from 'next/head'
import Navbar from '../containers/Navbar'
import React from 'react'
import { initGA, logPageView } from '../utils/analytics'




export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  
  render () {
    return (
      <div>
      <Head>
      <title>Democracia en Red</title>
      <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
      <link rel="shortcut icon" type="favicon" href="/static/assets/icons/der-favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
      
    </Head>
    <Navbar 
      changeLang={this.props.changeLang}
      currentLang={this.props.currentLang}
    />
    {this.props.children} 
    <style jsx global>{`
    section:nth-child(odd) {
      background-color: #efefef;
    }
    
    section:nth-child(even) {
      background-color:  #fff;
    }

    ` 

    }</style>
      </div>
    )
  }
}
