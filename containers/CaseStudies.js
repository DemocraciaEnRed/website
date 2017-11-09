import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import CaseStudiesCard from '../components/CaseStudiesCard'
let Flickity;

const example = [
  {title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet'}
]

class CaseStudies extends Component  {
  constructor (props) {
    super(props)
    this.flkty = null
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
      if (this.flkty) this.flkty.destroy()
      const options = {
        cellCelector: '.case-studies-card',
        pageDots: false,
        autoplay: true,
        wrapAround: true,
        alignCells: 'center',
        draggable: true,
        friction: 0.2,
        contain: true
      }
      this.flkty = new Flickity(this.refs.carousel, options)
    }
  }

  componentWillUnmount () {
    if (this.state.mobile) {
      this.flkty.destroy()
    }
  }

  render () {
    return (
      <section className='case-studies-section'>
        <h2 className='section-title'>
          Case Studies
        </h2>
        <MediaQuery minDeviceWidth={1025}>
          <div className ='case-studies-container carousel'>
            {example.map((card, i) => (
              <CaseStudiesCard key={i} title={card.title} subtitle={card.subtitle} />
            ))}
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1024}>
          <div className ='case-studies-container carousel' ref='carousel'>
            {example.map((card, i) => (
              <CaseStudiesCard key={i} title={card.title} subtitle={card.subtitle} />
            ))}
          </div>
        </MediaQuery>
        <button className='btn'>
          <span className='action-text'>
            Ver más
          </span>
        </button>
      <style jsx>{`
        .case-studies-section {
          display: flex;
          flex-direction: column;
        }
        .case-studies-container.carousel{
          display: flex;
          justify-content: space-between;
        }
        .case-studies-section .btn {
          align-self: center;
        }
        .case-studies-section .btn .action-text {
          color: var(--white);
        }
        @media (max-width: 1024px) {
          @import '../node_modules/flickity/css/flickity.css'

          .case-studies-section {
            flex-direction: column;
          }
          .case-studies-container.carousel{
            height: 326px;
            display: block;
            overflow: hidden;
          }
          .case-studies-section .section-title {
            font-size: 3.0rem;
          }
          .case-studies-section .btn {
            align-self: center;
            height: 36.7px;
            width: 200px;
          }
          .case-studies-section .btn .action-text {
            font-size: 2.1rem;
          }
          .carousel .flickity-prev-next-button {
            display: none;
          }
        }
        @media (max-width: 425px) {
          .case-studies-section .case-studies-container {
            margin-left: -24px;
            margin-right: -24px;
          }
        }
    `}</style>
  </section>
  )
}
}

export default CaseStudies