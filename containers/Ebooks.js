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
  render () {
    return (
      <section className='ebooks-section'>
        <h2 className='section-title'>E-books</h2>
        <div className='ebooks-container'>
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
              margin: 17px 0 0;
            }
          }
          @media screen and (max-width: 500px) {
            .ebook-container {
              justify-content: center;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Ebooks