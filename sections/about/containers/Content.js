import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import DisplayVideo from '../components/DisplayVideo'
const SliderContainer  = dynamic(import('./SliderContainer'), {
  ssr: false
})

class Content extends React.Component{
  constructor(props){
    super(props)
    this.playlistId = 'PL-5jaKJlVw83pDzsOkK079BTOzrZ-VfNT'
    this.state = {
      currentVideo : 'qJn3XVme-oQ',
      videos: []
    }
  }
  
    
  handleClick = (id) => () => {
    this.setState({ currentVideo : id })
  }


componentDidMount () {
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

render() {
  return (
    <section className='video-section' id='videos'>
      <h2 className='section-title'>Material audiovisual</h2>
      <DisplayVideo
        video={this.state.currentVideo} />
      <div className='slider-wrapper'>
        <SliderContainer
          videos={this.state.videos}
          handleClick={this.handleClick} />
      </div>
      <style jsx>{`
        .video-section {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
        }
        .section-title {
          display: block;
          text-align: center;
          margin-bottom:0.5em;
          margin-top: 0.5em;
        }
        .slider-wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
}

export default Content