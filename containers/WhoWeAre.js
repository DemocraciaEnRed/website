import React, { Component } from 'react'
import ProfileCard from '../components/ProfileCard'
let Flickity;

const profiles = [
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'}
]

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
      const options = {
        cellCelector: '.profile-card',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'center',
        draggable: true,
        friction: 0.2,
        contain: true
      }
      new Flickity(this.refs.carousel, options)
    }
  }

  render() {
    return (
      <section className='who-we-are-section'>
        <h2 className='section-title'>Who we are</h2>
        <div className='profile-container' ref='carousel'>
          {profiles.map((p, i) => 
            <ProfileCard key={i} name={p.name} bio={p.bio} handle={p.handle} img={p.img} />
          )}
        </div>
        <style jsx>{`
          .who-we-are-section {
            padding-bottom: 173px;
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
            @import '../node_modules/flickity/css/flickity.css';

            .who-we-are-section {
              padding: 24px 24px 112px;
            }
            .profile-container {
              display: block;
              margin-top: 33px;
              overflow: hidden;
              height: 250px;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default WhoWeAre