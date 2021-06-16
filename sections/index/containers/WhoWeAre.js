import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import ProfileCard from '../components/ProfileCard'
let Flickity;

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19]
const text = [0, 1, 2, 3]

class WhoWeAre extends Component {
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
      const wrapAround= window.innerWidth >= 980 ? true : false
      const options = {
        cellCelector: '.profile-card',
        cellAlign: 'center',
        pageDots: true,
        prevNextButtons: false,
        wrapAround: wrapAround
      }
      this.flickity = new Flickity(this.refs.carousel, options)
    }
  }

  render() {
    return (
      <section className='who-we-are-section' id='who-we-are'>
        <h2 className='section-title'>{t('index.whoWeAre.title')}</h2>
        <div className="subtitle">
          {text.map(i => {
            return <h4  className="subtext" key={i}>{t(`index.whoWeAre.subtitle.${i}`)}</h4>
          })}
        </div>
        <div className='profile-container carousel' ref='carousel'>
          {data.map((i) => 
            <ProfileCard key={i} name={t(`index.whoWeAre.team.${i}.name`)} bio={t(`index.whoWeAre.team.${i}.bio`)} handle={t(`index.whoWeAre.team.${i}.handle`)} url={t(`index.whoWeAre.team.${i}.url`)} img={t(`index.whoWeAre.team.${i}.img`)} />
          )}
        </div>
        <style jsx>{`
          .who-we-are-section {
            overflow-y: hidden;
            width:100%;
          }
          .subtitle {
            margin: 1.5em;
          }
          .profile-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 50px;
          }
          @media screen and (min-width: 1440px) {
            .who-we-are-section {
              align-items: center;
              display: flex;
              flex-direction: column;
            }
            .subtitle {
              margin: 1em;
            }
            .profile-container {
              margin-top: 20px;
              width: 1270px;
            }
            .section-title {
              align-self: center;
            }
          }
          @media screen and (max-width: 1024px) {
            .subtitle {
              margin: 0.5em;
            }
            .profile-container {
              display: block;
              margin-top: 33px;
              height: 265px;    
            }
            .flickity-prev-next-button {
              width: 100px;
              height: 100px;
              background: transparent;
            }
            .flickity-prev-next-button:hover {
              background: transparent;
            }
            .flickity-prev-next-button .arrow {
              fill: #C5A3D1;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default WhoWeAre