import EbookCard from '../components/EbookCard'

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

const Ebooks = () => (
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
          padding: 25px 25px 144px 25px ;
        }
        .ebooks-container {
          margin: 84px 0 0;
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

export default Ebooks