import React, { Component } from 'react'
import EbookCard from '../components/EbookCard'
let Flickity;

const dataEbooks = [
  {
    img: '',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: ''
  },
  {
    img: '',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: ''
  }
]

class Ebooks extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobile: null
    }
  }

  componentDidMount () {
    Flickity = require('flickity')
    if (window.innerWidth <= 1024) {
      this.setState({
        mobile: true
      })
    } else {
      this.setState({
        mobile: false
      })
    }
  }

  componentDidUpdate(){
    if (!this.state.mobile) {
      console.log('hola')
      const options = {
        cellCelector: '.ebook-card',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'center',
        draggable: true,
        friction: 0.2,
        contain: true,
        freeScroll: false,
        prevNextButtons: true
      }
      new Flickity(this.refs.carousel, options)
    }
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
      new Flickity(this.refs.carousel, options)
    }
  }

  render () {
    return (
      <section className='ebooks-section'>
        <h2 className='section-title'>E-books</h2>
        <div className='ebooks-container carousel' ref='carousel'>
          {dataEbooks.map((item,i) => 
            <EbookCard key={i} img={item.img} title={item.title} description={item.description} link={item.link} />
          )}
        </div>
        <div className='section-number'>
          <span>05</span>
        </div>
        <style jsx>{`
          .ebooks-section {
            padding-bottom: 160px;
          }
          .ebooks-container {
            display: block;
            overflow: hidden;
            margin-top: 59px;
            padding-left: 70px;
            padding-right: 70px;
          }
          @media screen and (max-width: 1024px) {
            .ebooks-section {
              padding: 24px 24px 111px 24px ;
            }
            .ebooks-container {
              height: 176px;
              display: block;
              overflow: hidden;
              margin: 17px 0 0;
            }
          }
          @media screen and (max-width: 425px) {
            .ebooks-container {
              margin-right: -24px;
            }
          }
          @media screen and (max-width: 1354px), screen and (min-width: 1025px) {
            .ebooks-container {
              padding-right: 50px;
              padding-left: 50px;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Ebooks