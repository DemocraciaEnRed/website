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
        <img src="../static/assets/banner-se-voz.jpg" className="is-hidden-tablet" alt=""/>
        <img src="../static/assets/banner-se-voz-mobile.jpg" className="is-hidden-mobile" alt=""/>
        <a className="button" href="https://preguntarparaacordar.typeform.com/to/VTI9VF52" target="_blank">SUBÍ TU MEME</a>
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
      .se-voz .button{
        position:absolute;
        bottom:17%;
        right:40%
        background: #000;
        color: #fff794
        padding:5px;
        font-size:2rem
      }
        
      .se-voz img{
        height: 70vh;
        width: 100vw; 
        object-fit: cover;

      }
      @media only screen and (min-width:769px){
        .is-hidden-mobile{
          display:none
        }
      }
      @media only screen and (max-width:768px){
        .is-hidden-tablet{
          display:none
        }
        .se-voz img{
        height:auto;
        }
        .se-voz .button{
          font-size:1rem;
          right:21%
          bottom.20%
        }
      }
      @media only screen and (max-width:480px){
        .se-voz .button{
          bottom:22%;
          right:28%
        }
      }
    `}</style>
    </div>
  );}
}

export default SimpleSlider