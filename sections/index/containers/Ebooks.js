import React, { Component } from 'react'
import { t } from '../../../polyglot-modules/polyglot.js'
import EbookCard from '../components/EbookCard'
//let Flickity;

const data = [0, 1, 2, 3, 4, 5]

class Ebooks extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobile: false
    }
  }

  componentDidMount () {
    //Flickity = require('flickity')
    if (window.innerWidth < 768) {
      this.setState({
        mobile: true
      })
    }
  }

  componentDidUpdate(){
/*  Slider in desktop. Uncomment this when there are more than two books
    if (!this.state.mobile) {
      const options = {
        cellCelector: '.ebook-card',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'left',
        draggable: true,
        friction: 0.2,
        contain: true,
        freeScroll: false,
        prevNextButtons: true
      }
      this.flickity = new Flickity(this.refs.carousel, options)
    }*/
    if (this.state.mobile) {
      const options = {
        cellCelector: '.ebook-card',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'left',
        draggable: true,
        friction: 0.2,
        contain: true,
        freeScroll: false,
        prevNextButtons: false
      }
      //this.flickity = new Flickity(this.refs.carousel, options)
    }
  }


  render () {
    return (
      <section className='ebooks-section' id='ebooks'>
        <h2 className='section-title'>{t('index.ebooks.title')}</h2>
        <div className='ebooks-container carousel' ref='carousel'>
          {data.map((i) =>
            <EbookCard key={i} img={t(`index.ebooks.content.${i}.img`)} title={t(`index.ebooks.content.${i}.title`)} description={t(`index.ebooks.content.${i}.subtitle`)} link={t(`index.ebooks.content.${i}.link`)} />
          )}
        </div>
        <style jsx>{`
          .ebooks-section {
            padding-bottom: 100px;
          }
          .ebooks-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
          }
          @media screen and (max-width: 1024px) {
            .ebooks-section {
              padding: 24px 24px 48px 24px ;
            }
            .ebooks-container {
              display: flex;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Ebooks
