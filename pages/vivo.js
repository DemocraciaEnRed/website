import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import { t } from '../polyglot-modules/polyglot.js'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Header from '../containers/Header'
import LiveDesinformacion from '../containers/live/LiveDesinformacion'
import LiveEleitas from '../containers/live/LiveEleitas'
import Layout from '../layouts/Layout'
import LiveDebate from '../containers/live/LiveDebate';
import CommonCitys from '../containers/live/CommonCitys';
import ChangeGoverment from '../containers/live/ChangeGoverment'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLang : 'es'
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
  }

  componentDidMount () {
    const lang = localStorage.getItem('lang')
    if (lang === null) {
      localStorage.setItem('lang', 'es')
    } else if (lang !== polyglot.currentLocale) {
      this.changeLang('en')
    }
  }

  changeLang = (lang) => {
    const newLang = lang === 'es' ? es : en
    polyglot.extend(newLang) 
    polyglot.locale(newLang.language)
    localStorage.setItem('lang', lang)
    this.setState({currentLang: lang})
  }
  
  render () {
    return (
      <div>
        <Layout 
          changeLang={this.changeLang}
          currentLang={this.state.currentLang} >
            <div className="header-streamings">
               <img src='/static/assets/live/der-live-logo.svg' className='der-live-logo' />
             
            </div>
          <LiveDesinformacion></LiveDesinformacion>
          <LiveEleitas></LiveEleitas>
          <LiveDebate/>
          <CommonCitys/>
          <ChangeGoverment/>
        </Layout>
        <style jsx>{`
          .header-streamings{
            padding: 85px 50px 35px;
            text-align: center;
            background: rgb(23,43,55);
            background: -moz-linear-gradient(135deg, rgba(23,43,55,1) 0%, rgba(43,90,119,1) 100%);
            background: -webkit-linear-gradient(135deg, rgba(23,43,55,1) 0%, rgba(43,90,119,1) 100%);
            background: linear-gradient(135deg, rgba(23,43,55,1) 0%, rgba(43,90,119,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#172b37",endColorstr="#2b5a77",GradientType=1);
          }
          .header-streamings .der-live-logo{
            display: block;
            max-width: 300px;
            margin: 0 auto;
          }
          section {
            padding-left: 100px;
            padding-right: 100px;
          }
          .coming-next{
            text-align: center;
            padding: 5rem 2rem;
          }
          .coming-next h1 {
            color: var(--dark-accent); 
          }  
          .eleitas-container{
            background-color: #603d99;
            font-size: 16px;
            color: #FFF
          }
        `}</style>
      </div>
    )
  }
}
