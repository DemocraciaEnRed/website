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
        cellCelector: '.ebook-card',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'left',
        draggable: true,
        friction: 0.2,
        contain: true,
        freeScroll: false
      }
      new Flickity(this.refs.carousel, options)
    }
  }

  render () {
    return (
      <section className='ebooks-section'>
        <h2 className='section-title'>E-books</h2>
        <div className='ebooks-container' ref='carousel'>
          {dataEbooks.map((item,i) => 
            <EbookCard key={i} img={item.img} title={item.title} description={item.description} link={item.link} />
          )}
        </div>
        <style jsx>{`
          .ebooks-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 59px 0 118px;
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
        `}</style>
      </section>
    )
  }
}

export default Ebooks