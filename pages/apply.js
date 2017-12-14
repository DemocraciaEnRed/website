import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../containers/Header'
import Breadcrumbs from '../sections/jobs/components/Breadcrumbs'
import JobForm from '../sections/jobs/containers/JobForm'
import jobs from '../jobs/jobs.json'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLang : 'es',
      routes: []
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
  }

  componentDidMount () {
    const job = jobs.find(this.checkId)
    job !== undefined &&
    this.setState({
      routes : [
        {
          title: 'Jobs',
          path: '/jobs'
        },
        {
          title: job.job,
          path: job.url
        },
        {
          title: 'Apply',
          path: location.pathname
        }
      ]
    })
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

  //returns the value for the given variable in the url query
  getQueryVariable = (variable) => {
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=")
      if(pair[0] == variable){return pair[1]}
    }
    return(false)
  }

  checkId = (job) => {
    const jobId = this.getQueryVariable('id')
    return job.id === jobId
  }

  render () {
    return (
      <div>
        <Layout changeLang={this.changeLang} currentLang={this.state.currentLang}>
          <Header 
            title={'JOBS'}
            bg={'../static/assets/header/headerAbout.jpg'}/>
          {this.state.routes && <Breadcrumbs routes={this.state.routes} /> }
          <JobForm />
        </Layout>
      </div>
    )
  }
}