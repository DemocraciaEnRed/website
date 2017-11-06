import CaseStudiesCard from '../components/CaseStudiesCard'

const example = [
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'},
  {title: 'Lorem ipsum dolor sit amet', subtitle: 'Lorem ipsum dolor sit amet'}
]

const CaseStudies = () => (
  <section className='case-studies-section'>
    <h2 className='section-title'>
      Case Studies
    </h2>
    <div className='case-studies-container'>
      {example.map((card, i) => {
        return <CaseStudiesCard title={card.title} subtitle={card.subtitle} />
      })}
    </div>
    <button className='btn'>
      <span className='action-text'>
        Ver más
      </span>
    </button>
    <style jsx>{`
      .case-studies-section {
        display: flex;
        flex-direction: column;
      }
      .case-studies-section .case-studies-container{
        display: flex;
        justify-content: space-between;
      }
      .case-studies-section .btn {
        align-self: center;
      }
      .case-studies-section .btn .action-text {
        color: var(--white);
      }
    `}</style>
  </section>
)

export default CaseStudies