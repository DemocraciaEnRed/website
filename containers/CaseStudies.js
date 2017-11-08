import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import CaseStudiesCard from '../components/CaseStudiesCard'

const DynamicComponent = dynamic(import ('flickity'))

const example = [
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'}
]

class CaseStudies extends Component  {
  render () {
    return (
      <section className='case-studies-section'>
        <h2 className='section-title'>
          Case Studies
        </h2>
        <div className='case-studies-container'>
          {example.map((card, i) => {
            return <CaseStudiesCard key={i} title={card.title} subtitle={card.subtitle} />
          })}
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
        @media (max-width: 500px) {
          .case-studies-section .section-title {
            font-size: 3.0rem;
          }
          .case-studies-section .case-studies-container {
            flex-direction: column;
            align-items: center;
          }
          .case-studies-section .btn {
            height: 36.7px;
            width: 200px;
          }
          .case-studies-section .btn .action-text {
            font-size: 2.1rem;
          }
        }
    `}</style>
  </section>
  )
}
}

export default CaseStudies