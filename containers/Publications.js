import React, { Component } from 'react'
import MediumPost from '../components/MediumPost'
import MediaQuery from 'react-responsive'
let Flickity;

let snippet = 'A wonderful serenity has taken possession of my entire soul, like this.'
let timestamp = '14:20 PM, Tuesday'
let likes = 123

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
      <section className='publications-section'>
        <h2 className='section-title'>Publicaciones</h2>
        <div className='posts-container' ref='carousel'>
          <MediumPost
            snippet={snippet}
            timestamp={timestamp}
            likes={likes} />
          <MediumPost
            snippet={snippet}
            timestamp={timestamp}
            likes={likes} />
          <MediumPost
            snippet={snippet}
            timestamp={timestamp}
            likes={likes} />
        </div>
        <MediaQuery maxDeviceWidth={1024}>
          <button className='btn'>
            <span className='action-text'>
              Ver más
            </span>
          </button>
        </MediaQuery>
        <style jsx>{`
          .publications-section {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 151px;
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