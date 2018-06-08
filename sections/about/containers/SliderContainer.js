import React, { Component } from 'react'
import ThumbnailSlider from '../components/ThumbnailSlider'

export default class extends Component {
  render () {
    return (
      <div className='thumbnails-container' ref='carousel'>
      {this.props.videos.map((video) => 
        <ThumbnailSlider
          id={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          key={video.id}
          handleClick={this.props.handleClick}
        />
      )}
      </div>
    )
  }
}
