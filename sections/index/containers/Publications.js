import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import MediumPost from '../components/MediumPost'
import MediaQuery from 'react-responsive'
let Flickity;

const data = [0, 1, 2]

class Publications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false
    }
  }

  componentDidMount () {
    Flickity = require('flickity')
    if (window.innerWidth <= 1024) {
      this.setState({
        mobile: true
      })
    }
  }

  componentDidUpdate(){
    if (this.state.mobile) {
      const options = {
        cellCelector: '.medium-post',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'left',
        draggable: true,
        friction: 0.2,
        contain: true,
        prevNextButtons: false
      }
      new Flickity(this.refs.carousel, options)
    }
  }

  render() {
    return (
      <section className='publications-section' id='publications'>
        <h2 className='section-title'>{t('index.publications.title')}</h2>
        <div className='posts-container' ref='carousel'>
          {data.map((i)=> {
          return <MediumPost 
              key={i}
              snippet={t(`index.publications.content.${i}.text`)}
              timestamp={t(`index.publications.content.${i}.date`)}
              likes={t(`index.publications.content.${i}.likes`)} />
          })}
        </div>
        <MediaQuery maxDeviceWidth={1024}>
          <button className='btn'>
            <span className='action-text'>
              {t('index.publications.callToAction')}
            </span>
          </button>
        </MediaQuery>
        <style jsx>{`
          .publications-section {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 85px;
          }
          .posts-container {
            margin-top: 43px;
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          @media (max-width: 1024px) {
            .publications-section {
              padding-bottom: 42px;
            }
            .posts-container {
              margin: 24px 0 33px;
              display: block;
              overflow: hidden;
              width: 100%;
              height: 229px;
            }
            .btn {
              margin: auto;
            }
          }
          @media (max-width: 425px) {
          .publications-section {
            padding-right: 0px;
            padding-bottom: 42px;
          }
          .posts-container {
            margin-right: -24px;
          }
        }
        `}</style>
      </section>
    )
  }
}

export default Publications