
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { t, polyglot } from '../../../polyglot-modules/polyglot.js'
import MediumPost from '../components/MediumPost'
let Flickity;

const data = [0, 1, 2]

class Cases extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false,
      posts : []
    }
  }

  componentDidMount () {
    Flickity = require('flickity')
    this.updatePosts()
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentLang != prevProps.currentLang)
      this.updatePosts()

    const options = {
      cellCelector: '.medium-post',
      pageDots: true,
      wrapAround: true,
      cellAlign: 'left',
      draggable: true,
      friction: 0.2,
      contain: true,
      prevNextButtons: true,
      adaptiveHeight: true,
      imagesLoaded: true,
    }
    this.flickity = new Flickity(this.refs.carousel, options)
  }

  updatePosts(){
    const lang = localStorage.getItem('lang')
    const apiUrl = `api/casos?lang=${lang === null ? 'es' : lang}`
    fetch(apiUrl)
      .then( r => r.json() )
      .then( data => {
        data.forEach(function(post){
          let urlSuffix = post.url.substr(post.url.lastIndexOf('/')+1)
          let tKey = 'index.caseStudies.cases.' + urlSuffix
          if (polyglot.has(tKey))
            post.title = t(tKey)
        })
        this.setState({ posts: data })
    })
  }

  render() {
    return (
      <section className='case-studies-section' id='cases'>
        <h2 className='section-title'>{t('index.caseStudies.title')}</h2>
        <div className='posts-container' ref='carousel'>
          {this.state.posts.map((post, i)=>
            <MediumPost
              key={i}
              snippet={post.title}
              timestamp={post.createdAt}
              likes={post.claps}
              img={post.image}
              url={post.url} />
          )}
        </div>

        <style jsx>{`
          .case-studies-section {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 85px;
            overflow-x: hidden;
          }
          .posts-container {
            margin-top: 43px;
            width: 100%;
          }
          .btn-container {
            display: none;
          }
          @media (max-width: 1024px) {
            .case-studies-section {
              padding-bottom: 42px;
            }
            .posts-container {
              margin: 24px 0 33px;
              display: block;
              overflow: hidden;
              width: 100%;
              height: 229px;
            }
          }
          @media (max-width: 475px) {
          .case-studies-section {
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

export default Cases

/* import { t } from '../../../polyglot-modules/polyglot.js'
import Link from 'next/link'
import Milestone from '../components/Milestone'

const items = [0, 1, 2]

const AboutUs = () => (
	<section className='about-us-section' id='what-we-do'>
		<h2 className='section-title'>{t('index.aboutUs.title')}</h2>
    <div className='about-us-container'>
      {items.map((i) => {
        return <Milestone key={i} title={t(`index.aboutUs.content.${i}.title`)} subtitle={t(`index.aboutUs.content.${i}.subtitle`)} icon={t(`index.aboutUs.content.${i}.icon`)}containerWidth={'290px'} />
      })}
    </div>
    <div className="buttons-container">
    <Link href='/what-we-do'>
      <button className='btn'>
        <span className='action-text'>
          {t('index.aboutUs.callToAction')}
        </span>
      </button>
    </Link>
    <a href={'https://drive.google.com/file/d/1dOuw_imRgG0dLA539Zoi6OIlRMCXInnd/view'} target="_blank">
      <button className='btn'>
        <span className='action-text'>
          {t('index.aboutUs.downloadPDF')}
        </span>
      </button>
    </a>
    </div>
    <style jsx>{`
      .about-us-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .about-us-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin: 64px 0 30px;
      }
      .about-us-section .btn {
        align-self: center;
        margin-top: 30px;
      }
      .about-us-section .btn span {
        color: var(--white);
      }
      .section-number {
        right: 83px;
      }
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 45px;
        width: 511px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 520px) {
        .buttons-container {
          align-items: center;
          flex-direction: column;
          width: 100%;
        }
        .buttons-container .btn:first-child {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 1440px) {
        .about-us-container {
          justify-content: space-between;
        }
      }
      @media (max-width: 1024px) {
        .about-us-container {
          margin-top: 24px;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .about-us-section .section-title {
          font-size: 3.0rem;
        }
        .about-us-section .btn {
          margin-top: -7px;
        }
      }
    `}</style>
	</section>
)

export default AboutUs */
