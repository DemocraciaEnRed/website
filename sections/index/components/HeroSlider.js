import React, {Component} from "react";
import Slider from "react-slick";
import Head from 'next/head'
import Header from '../containers/Header'
import { polyglot } from '../../../polyglot-modules/polyglot.js'


class SimpleSlider extends Component {
    constructor (props) {
        super(props)
        this.state = {
          currentLang : 'es',
          modal: false,
          content: ''
        }
        if (Object.values(polyglot.phrases).length === 0) {
          polyglot.extend(es)
          polyglot.locale(es.language)
        }
      };


 render (){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  return (
  <div className="hero-slider-container">
    <Head>
        <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
    </Head>
    <Slider {...settings} className="hero-container">
      <div>
      <Header  modal={this.state.modal} content={this.state.content} hideModal={this.hideModal} />
      </div>
      <div className="slide se-voz">
        <a href="https://merepresenta.info/" target="_blank">
          <img src="../static/assets/merre-desktop.png" className="is-hidden-tablet" alt="Banner de Me representa"/>
        </a>
        <a href="https://merepresenta.info/" target="_blank">
          <img src="../static/assets/merre-mobile.png" className="is-hidden-desktop" alt="Banner de Me representa"/>
        </a>
        
        
      </div>
    </Slider>
    <style jsx>{`
      .slick-dots{
          bottom:25%
      }
      .slick-slide {
        margin:auto !important
      }
      .hero-slider-container{
          padding-bottom:30px
      }
      .se-voz{
          overflow:hidden;
          position:relative
      }
      .se-voz img{
        width: 100vw;
        object-position: top;
        object-fit: contain;
        margin-top:30px
      }
      .is-hidden-desktop{
        display: none
      }
    
      @media only screen and (max-width:480px){
        .is-hidden-desktop{
          display: block;
        }
        .is-hidden-tablet{
          display:none
        }
      }
    `}</style>
    </div>
  );}
}

export default SimpleSlider