import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import CaseStudiesCard from '../components/CaseStudiesCard'
let Flickity;

const example = [
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'}
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
    if (window.innerWidth < 1024) {
      this.setState({
        mobile: true
      })
    }
  }

  componentDidUpdate(){
    if (this.flkty) this.flkty.destroy()
    const options = {
      animate: true,
      pageDots: false,
      autoplay: true,
      cellAlign: 'center'
      
    }
    this.flkty = new Flickity(this.refs.carousel, options)
  }

  componentWillUnmount () {
    this.flkty.destroy()
  }

  render () {
    return (
      <section className='case-studies-section'>
        <h2 className='section-title'>
          Case Studies
        </h2>
        <div className='case-studies-container carousel' ref='carousel'>
          {example.map((card, i) => (
            <CaseStudiesCard key={i} title={card.title} subtitle={card.subtitle} />
          ))}
        </div>
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
        .case-studies-section .case-studies-container{
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
          .case-studies-section .case-studies-container {

          }
          .case-studies-section .section-title {
            font-size: 3.0rem;
          }
          .case-studies-section .btn {
            height: 36.7px;
            width: 200px;
          }
          .case-studies-section .btn .action-text {
            font-size: 2.1rem;
          }
        }
        @import '../node_modules/flickity/css/flickity.css'
    `}</style>
  </section>
  )
}
}

export default CaseStudies