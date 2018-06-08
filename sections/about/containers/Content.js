import React, { Component } from 'react'
import ThumbnailSlider from '../components/ThumbnailSlider'
import DisplayVideo from '../components/DisplayVideo'
import SliderContainer from './SliderContainer'

const api = 'AIzaSyBIBmx-nyGW907aCAOtnZGpyrJfyhipjKs'

class Content extends React.Component{
  constructor(props){
    super(props)
    this.playlistId = 'PL-5jaKJlVw83pDzsOkK079BTOzrZ-VfNT'
    this.state = {
      currentVideo : 'FJS0zWIQJo0',
      videos: []
    }
  }
  
    
  handleClick = (video) => () => {
    this.setState({
      currentVideo : video.id,
      currentTitle: video.title
    })
    }


componentDidMount () {
  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${api}&playlistId=${this.playlistId}&part=snippet&maxResults=12`)
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

render() {
  return (
    <section className='video-section' id='videos'>
      <h2 className='section-title'>Material audiovisual</h2>
      <DisplayVideo />
      <SliderContainer videos={this.state.videos} />
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