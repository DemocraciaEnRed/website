import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import Link from 'next/link'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../sections/index/containers/Header'
import Cases from '../sections/index/containers/Cases'
import Collaborate from '../sections/index/containers/Collaborate'
import Ebooks from '../sections/index/containers/Ebooks'
import Media from '../sections/index/containers/Media'
import WhoWeAre from '../sections/index/containers/WhoWeAre'
import Publications from '../sections/index/containers/Publications'
import Footer from '../containers/Footer'
import Content from "../sections/about/containers/Content"
const env = 'undefined' !== process ? process.env.YOUTUBE_API_KEY : null

export default class extends Component {
  static getInitialProps() {
    return { env };
  }

  constructor (props) {
    super(props)
    this.state = {
      currentLang : 'es',
      modal: false,
      content: ''
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
  }

  componentWillMount () {
    if (typeof window !== 'undefined') {
      localStorage.setItem('youtube', this.props.env)
      const lang = localStorage.getItem('lang')
      if (lang === null) {
        localStorage.setItem('lang', 'es')
      } else if (lang !== polyglot.currentLocale) {
        this.changeLang('en')
      }
    }
  }

  componentDidMount () {
    const isSubscribed = this.getQueryVariable('subscripto')
    if (isSubscribed !== undefined) {
      this.setState({
        modal: true,
        content: isSubscribed === 'true' ? 'Ya estás subscripto a Democracia en Red. ¡Pronto recibirás novedades!' : 'Link inválido, asegurate de validar el link antes de dos días y de utilizar el link del último mail de confirmación'
      })
    }
  }

  changeLang = (lang) => {
    const newLang = lang === 'es' ? es : en
    polyglot.clear()
    polyglot.extend(newLang)
    polyglot.locale(newLang.language)
    localStorage.setItem('lang', lang)
    this.setState({currentLang: lang})
  }

  getQueryVariable = (variable) => {
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=")
      if(pair[0] == variable){return pair[1]}
    }
  }

  hideModal = () => {
    this.setState({modal: false})
  }

  render () {
    return (
      <div id="home-section">
        <Layout changeLang={this.changeLang} currentLang={this.state.currentLang}>
          <Header modal={this.state.modal} content={this.state.content} hideModal={this.hideModal} />
          <Cases currentLang={this.state.currentLang} />
          <Link href={'/vivo'}>
            <div className="header-streamings">
               <img src='/static/assets/live/der-live-logo.svg' className='der-live-logo' />
            </div>
          </Link>
          <Collaborate />
          <Publications currentLang={this.state.currentLang} />
          <Content />
          <Ebooks />
          <Media />
          <WhoWeAre />
          <Footer />
        </Layout>
        <style jsx>{`
          div {
            position: relative;
          }
          .header-streamings{
            cursor: pointer;
            padding: 70px 50px;
            text-align: center;
            background: rgb(23,43,55);
            background: -moz-linear-gradient(135deg, rgba(23,43,55,1) 0%, rgba(43,90,119,1) 100%);
            background: -webkit-linear-gradient(135deg, rgba(23,43,55,1) 0%, rgba(43,90,119,1) 100%);
            background: linear-gradient(135deg, rgba(23,43,55,1) 0%, rgba(43,90,119,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#172b37",endColorstr="#2b5a77",GradientType=1);
          }
          .header-streamings .der-live-logo{
            display: block;
            max-width: 250px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}
