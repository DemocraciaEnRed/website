import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'

const Content = (props) => (
  <section className='content-section'>
    <VideoPlayer api={props.youtubeApi}/>         
    <style jsx>{`
    h3{
      font-size:5em;
      padding:30px;
    }
      .content-section {
        padding-bottom: 100px;
        padding-top: 100px;
      }
    `}</style>
  </section>
)

export default Content