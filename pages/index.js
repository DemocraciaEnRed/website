import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
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
      <div>
        <Layout changeLang={this.changeLang} currentLang={this.state.currentLang}>
          <Header modal={this.state.modal} content={this.state.content} hideModal={this.hideModal} />
          <Cases />
          <Collaborate />
          <Publications />
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
        `}</style>
      </div>
    )
  }
}
