import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import MediaQuery from 'react-responsive'
import Milestone from '../components/Milestone'
let Flickity;

const data = [0, 1]

class Collaborate extends Component {
  constructor (props) {
    super(props)
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
    if (this.state.mobile) {
      const options = {
        cellCelector: '.collaborate-container',
        cellAlign: 'center',
        pageDots: false
      }
      new Flickity(this.refs.carousel, options)
    }
  }


  render () {
    return (
      <section className='collaborate-section' id='collaborate'>
           <div className='carousel' ref='carousel'>
            {data.map((i)=> 
              <div className='collaborate-container' key={i}>
                <h2 className='section-title'> {t(`index.collaborate.content.${i}.title`)} </h2>
                <Milestone 
                  className='collaborate-milestone'
                  title={t(`index.collaborate.content.${i}.subtitle`)} 
                  subtitle={t(`index.collaborate.content.${i}.text`)}
                  icon={t(`index.collaborate.content.${i}.icon`)}
                  button={t(`index.collaborate.content.${i}.callToAction`)}
                  href={t(`index.collaborate.content.${i}.href`)}
                  containerWidth={'auto'} />
              </div>     
            )}
          </div>
        <style jsx>{`
          .collaborate-section {
            display: flex;
            justify-content: space-between;
            overflow-x: hidden;
          }
          .carousel {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
          }
          .collaborate-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 486px;
          }
          .collaborate-container .section-title {
            align-self: flex-start;
            margin-bottom: 53px;
          }
          @media (min-width: 1600px) {
            .collaborate-section {
              justify-content: space-around;
            }
            .carousel {
              justify-content: space-around;
            }
            .collaborate-section .collaborate-container:nth-child(2) h2 {
              align-self: flex-end;
            }
          }
          @media (max-width: 1024px) {
            .carousel {
              display: block;
              width: 100%;
            }
            .collaborate-container .section-title {
              margin-bottom: 75px;
            }
            .collaborate-section {
              flex-direction: column;
              align-items: center;
              padding-bottom: 48px;
            }
            .collaborate-container {
              width: 100%;
            }
            .flickity-prev-next-button.previous{
              margin-left: -35px;
            }
            .flickity-prev-next-button.next{
              margin-right: -35px;
            }
          }
          @media (max-width: 425px) {
            .collaborate-section {
              padding-bottom: 0px;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Collaborate