import Milestone from '../components/Milestone'

const items = [
	{title: 'Abrir el gobierno', subtitle: 'Participación ciudadana facilitada por la tecnología'},
  {title: 'Repensar la educación', subtitle: 'Nuevas didácticas y pedagogías educativas'},
  {title: 'Promover liderazgos', subtitle: 'Redes regionales de proyectos político-sociales innovadores'}
]

const AboutUs = () => (
	<section className='about-us-section'>
		<h2 className='section-title'>About us</h2>
    <div className='about-us-container'>
      {items.map((item, i) => {
        return <Milestone key={i} title={item.title} subtitle={item.subtitle} />
      })}
    </div>
    <button className='btn'>
      <span className='action-text'>
        Ver más
      </span>
    </button>
    <style jsx>{`
      .about-us-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .about-us-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin: 64px 0 30px;
      }
      .about-us-section .btn {
        align-self: center;
        height: 55px;
        width: 300px;
      }
      .about-us-section .btn span {
        color: var(--white);
      }
      @media (max-width: 1024px) {
        .about-us-section .section-title {
          font-size: 3.0rem;
        }
      }
      @media (max-width: 500px) {
        .about-us-container {
          flex-direction: column;
          margin: 40px 0 0;
        }
        .about-us-section button {
          display: none;
        }
      }
    `}</style>
	</section>
)

export default AboutUs