import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import ProfileCard from '../components/ProfileCard'
let Flickity;

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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
      const wrapAround= window.innerWidth >= 768 ? true : false
      const options = {
        cellCelector: '.profile-card',
        cellAlign: 'center',
        pageDots: false,
      }
      this.flickity = new Flickity(this.refs.carousel, options)
    }
  }

  componentWillUnmount() {
    if (this.flickity) {
      this.flickity.destroy();
    }
  }

  render() {
    return (
      <section className='who-we-are-section' id='who-we-are'>
        <h2 className='section-title'>{t('index.whoWeAre.title')}</h2>
        <div className='profile-container carousel' ref='carousel'>
          {data.map((i) => 
            <ProfileCard key={i} name={t(`index.whoWeAre.team.${i}.name`)} bio={t(`index.whoWeAre.team.${i}.bio`)} handle={t(`index.whoWeAre.team.${i}.handle`)} img={t(`index.whoWeAre.team.${i}.img`)} />
          )}
        </div>
        <style jsx>{`
          .who-we-are-section {
            overflow-y: hidden;
          }
          .profile-container {
            align-content: space-between;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            height: 850px;
            margin-top: 72px;
            width: 100%;
          }
          @media screen and (min-width: 1440px) {
            .profile-container {
              width: 1270px;
            }
          }
          @media screen and (max-width: 1024px) {
            .profile-container {
              display: block;
              margin-top: 33px;
              height: 250px;
              overflow: hidden;
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