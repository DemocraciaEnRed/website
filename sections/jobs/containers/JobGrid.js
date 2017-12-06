import JobCard from '../sections/jobs/components/JobCard'

const JobGrid = () => (
  <section className='jobs-section'>
    <div className='jobs-header'>
      <h2 className='section-title'>Trabajá con nosotros</h2>
      <p className='regular-text'>¡Estamos buscando gente para sumar a nuestro equipo!</p>
    </div>
    <div className='jobs-container'>
    </div>
    <style jsx>{`
      .jobs-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 83px 60px 115px;
      }
      .jobs-header {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .section-title {
        font-size: 3.6rem;
        text-transform: uppercase;
      }
      .regular-text {
        color: var(--black);
        font-size: 2.4rem;
      }
      .jobs-container {
        align-items: space-between;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 83px;
      }
    `}</style>
  </section>
)

export default JobGrid