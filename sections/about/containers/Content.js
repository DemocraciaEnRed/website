import React, { Component } from 'react'
import ThumbnailSlider from '../components/ThumbnailSlider'
import DisplayVideo from '../components/DisplayVideo'

let Flickity;


class Content extends React.Component{
  constructor(props){
    super(props)
    this.playlistId = 'PL-5jaKJlVw83pDzsOkK079BTOzrZ-VfNT'
    this.state = {
      currentVideo : 'FJS0zWIQJo0',
      currentTitle : 'hola',
      videos: [],
      page: null
    }
  }
  
    
  handleClick = (video) => () => {
    this.setState({
      currentVideo : video.id,
      currentTitle: video.title
    })
    }


componentDidMount () {
  Flickity = require('flickity')

  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${this.props.api}&playlistId=${this.playlistId}&part=snippet&maxResults=12`)
  .then((response) => response.json())
  .then((responseJson) => {
    const items = responseJson.items.map((obj) => ({
        title: obj.snippet.title,
        thumbnail: obj.snippet.thumbnails.default.url,
        id: obj.snippet.resourceId.videoId
      }))
    return items
  })
  .then((videos) => this.setState({videos: videos}))
  .catch((error) => console.error(error))
}


componentDidUpdate(){
  const options = {
    cellCelector: '.thumbnail-items',
    pageDots: false,
    wrapAround: false,
    cellAlign: 'left',
    draggable: true,
    friction: 0.2,
    contain: true,
    prevNextButtons: true
  }
  this.flickity = new Flickity(this.refs.carousel, options)
}


render() {
  return (
    <section className='video-section' id='videos'>
      
      <h2 className='section-title'>{this.state.currentTitle}</h2>
      
      <div className='video-container'>
        <DisplayVideo />
       </div>

      <div className='thumbnails-container' ref='carousel'>
        { this.state.videos.map((video,i) => 
          <ThumbnailSlider
            key={i}
             />
        )}
      </div>
    {/*  <div className='btn-container'>
        <a href='https://medium.com/multitudes' role='author' target='_blank'>
          <button className='btn'>
            <span className='action-text'>
              {t('index.video.callToAction')}
            </span>
          </button>
        </a>
      </div>
      */ }
      <style jsx>{`
      
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 30px;
          height: 0;
          overflow: hidden;
        }

        .video-container iframe,
        .video-container object,
        .video-container embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .video-section {
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 85px;
          overflow-x: hidden;
        }
        .thumbnails-container {
          margin-top: 43px;
          width: 100%;
        }
        .btn-container {
          display: none;
        }
        @media (max-width: 1024px) {
          .video-section {
            padding-bottom: 42px;
          }
          .thumbnails-container {
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
        .video-section {
          padding-right: 0px;
          padding-bottom: 42px;
        }
        .thumbnails-container {
          margin-right: -24px;
        }
      }
      `}</style>
    </section>
  )
}
}

export default Content