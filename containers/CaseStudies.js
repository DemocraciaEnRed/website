import React, { Component } from 'react'
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
        cellCelector: '.case-studies-card',
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

  render () {
    return (
      <section className='case-studies-section' id='case-studies'>
        <h2 className='section-title'>
          Case Studies
        </h2>
          <div className ='case-studies-container carousel' ref='carousel'>
            {example.map((card, i) => (
              <CaseStudiesCard key={i} title={card.title} subtitle={card.subtitle} />
            ))}
          </div>
        <button className='btn'>
          <span className='action-text'>
            Ver más
          </span>
        </button>
        <div className='section-number'>
          <span>02</span>
        </div>
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
          margin-top: -3px;
        }
        .case-studies-section .btn .action-text {
          color: var(--white);
        }
        @media (max-width: 1024px) {
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
          .case-studies-section .btn .action-text {
            font-size: 2.1rem;
          }
        }
        @media (max-width: 425px) {
          .case-studies-section .case-studies-container {
            margin-right: -24px;
          }
        }
    `}</style>
  </section>
  )
}
}

export default CaseStudies