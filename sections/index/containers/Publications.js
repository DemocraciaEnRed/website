import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { t, polyglot } from '../../../polyglot-modules/polyglot.js'
import MediumPost from '../components/MediumPost'
let Flickity;

const data = [0, 1, 2]

class Publications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false,
      posts : []
    }
  }

  componentDidMount () {
    this.updatePosts()
    Flickity = require('flickity')
  }

  componentDidUpdate(prevProps){
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
    const apiUrl = `api/publicaciones?lang=${lang === null ? 'es' : lang}`
    fetch(apiUrl)
      .then( r => r.json() )
      .then( data => {
        data.forEach(function(post){
          let urlSuffix = post.url.substr(post.url.lastIndexOf('/')+1)
          let tKey = 'index.publications.items.' + urlSuffix
          if (polyglot.has(tKey))
            post.title = t(tKey)
        })
        this.setState({ posts: data })
    })
  }

  render() {
    return (
      <section className='publications-section' id='publications'>
        <h2 className='section-title'>{t('index.publications.title')}</h2>
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
     {/*    <div className='btn-container'>
          <a href='https://medium.com/multitudes' role='author' target='_blank'>
            <button className='btn'>
              <span className='action-text'>
                {t('index.publications.callToAction')}
              </span>
            </button>
              </a>
        </div>
            */}

        <style jsx>{`
          .publications-section {
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
            .btn-container {
              align-self: center;
              display: flex;
              justify-content: center;
              margin: auto;
            }
          }
          @media (max-width: 475px) {
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
