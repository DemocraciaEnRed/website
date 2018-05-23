import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import es from '../translations/es.json'
import en from '../translations/en.json'
import JobLayout from '../layouts/JobLayout'
import Content from '../jobs/ux-ui-designer-job.js'

const routes = [
  {
    title: 'Jobs',
    path: '/jobs'
  },
  {
    title: 'UX/UI Designer',
    path: '/ux-ui-designer'
  }
]

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLang : 'es',
      id: 'ux-ui-designer'
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
        <JobLayout 
          changeLang={this.changeLang} 
          currentLang={this.state.currentLang}
          category={'Diseño'}
          job={'UX/UI Designer'}
          breadcrumbs={routes}
          id={this.state.id} >
            <Content />
        </JobLayout>
      </div>
    )
  }
}