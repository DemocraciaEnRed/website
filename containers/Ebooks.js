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
        margin: 59px 0 160px;
      }
    `}</style>
  </section>
)

export default Ebooks