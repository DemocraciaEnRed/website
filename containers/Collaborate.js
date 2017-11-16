import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Milestone from '../components/Milestone'
let Flickity;

const collaborateItems = [
  {
    title: 'Collaborate',
    subtitle: '¿Cómo puedo colaborar?',
    paragraph: 'Ayudanos a llegar a más personas. Hay muchas maneras de colaborar.',
    button: 'Escribinos'
  },
  {
    title: 'Transparency',
    subtitle: '¿Quién nos financia? ¿Cómo gastamos?',
    paragraph: 'Aquí toda la información contable resumida y con su soporte documental.',
    button: 'Action'
  }
]

class Collaborate extends Component {
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
        cellCelector: '.profile-card',
        cellAlign: 'center',
        pageDots: false
      }
      this.flickity = new Flickity(this.refs.carousel, options)
    }
  }

  componentWillUnmount() {
    if (this.flickity) {
      this.flickity.destroy();
    }
  }

  render () {
    return (
      <section className='collaborate-section'>
        <MediaQuery minDeviceWidth={1025}>
          <div className='carousel' ref='carousel'>
            {collaborateItems.map((it, i)=> 
              <div className='collaborate-container' key={i}>
                <h2 className='section-title'> {it.title} </h2>
                <Milestone 
                  className='collaborate-milestone'
                  title={it.subtitle} 
                  subtitle={it.paragraph} 
                  button={it.button}
                  containerWidth={'auto'} />
              </div>     
            )}
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1024}>
          <div className='carousel' ref='carousel'>
            {collaborateItems.map((it, i)=> 
              <div className='collaborate-container' key={i}>
                <h2 className='section-title'> {it.title} </h2>
                <Milestone 
                  className='collaborate-milestone'
                  title={it.subtitle} 
                  subtitle={it.paragraph} 
                  containerWidth={'auto'} />
              </div>     
            )}
          </div>
        </MediaQuery>
        <style jsx>{`
          .collaborate-section {
            display: flex;
            justify-content: space-between;
            padding-bottom: 50px;
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
          @media (max-width: 1024px) {
            .carousel {
              display: block;
              overflow: visible;
              height: 375px;
              width: 100%;
            }
            .collaborate-container .section-title {
              margin-bottom: 75px;
            }
            .collaborate-section {
              flex-direction: column;
              align-items: center;
            }
            .collaborate-container {
              width: 100%;
            }
          }
          @media (min-width: 1600px) {
            .collaborate-section {
              justify-content: space-around;
            }
            .collaborate-section .collaborate-container:nth-child(2) h2 {
              align-self: flex-end;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Collaborate