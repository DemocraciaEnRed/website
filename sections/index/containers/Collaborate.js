import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import MediaQuery from 'react-responsive'
import Milestone from '../components/Milestone'
let Flickity;
import { logEvent } from '../../../utils/analytics'

const data = [0, 1]

class Collaborate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mobile: false
    }
    this.trackColaborate.bind(this)
  }
  trackColaborate() {
    logEvent("click", "como-puedo-colaborar");
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
           <div className='carousel'>
              <div className='collaborate-container' >
                <h2 className='section-title'> {t(`index.collaborate.content.0.title`)} </h2>
                <Milestone 
                  className='collaborate-milestone'
                  title={t(`index.collaborate.content.0.subtitle`)} 
                  subtitle={t(`index.collaborate.content.0.text`)}
                  icon={t(`index.collaborate.content.0.icon`)}
                  button={t(`index.collaborate.content.0.callToAction`)}
                  href={t(`index.collaborate.content.0.href`)}
                  containerWidth={'auto'}
                  classbtn={`index.collaborate.content0.classbtn`}
                  handleClick={this.trackColaborate} />
              </div>     
              <div className='collaborate-container' >
              <h2 className='section-title'> {t(`index.collaborate.content.1.title`)} </h2>
              <Milestone 
                className='collaborate-milestone'
                title={t(`index.collaborate.content.1.subtitle`)} 
                subtitle={t(`index.collaborate.content.1.text`)}
                icon={t(`index.collaborate.content.1.icon`)}
                button={t(`index.collaborate.content.1.callToAction`)}
                href={t(`index.collaborate.content.1.href`)}
                containerWidth={'auto'}
                classbtn={`index.collaborate.content1.classbtn`} />
            </div>     
            
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
            justify-content: center;
            width: 100%;
          }
          .collaborate-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 387px;
          }
          .collaborate-container .section-title {
            align-self: center;
            margin-bottom: 53px;
          }
          .collaborate-container .btn {
            margin-top:76px !important;
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
              width: 80%;
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