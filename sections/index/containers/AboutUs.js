import Link from 'next/link'
import Milestone from '../components/Milestone'

const items = [
	{title: 'Abrir el gobierno', subtitle: 'Participación ciudadana facilitada por la tecnología'},
  {title: 'Repensar la educación', subtitle: 'Nuevas didácticas y pedagogías educativas'},
  {title: 'Promover liderazgos', subtitle: 'Redes regionales de proyectos político-sociales innovadores'}
]

const AboutUs = () => (
	<section className='about-us-section' id='about'>
		<h2 className='section-title'>About us</h2>
    <div className='about-us-container'>
      {items.map((item, i) => {
        return <Milestone key={i} title={item.title} subtitle={item.subtitle} containerWidth={'290px'} />
      })}
    </div>
    <Link href="/about">
      <button className='btn'>
        <span className='action-text'>
          Ver más
        </span>
      </button>
    </Link>
    <div className='section-number'>
      <span>01</span>
    </div>
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
        margin-top: 30px;
      }
      .about-us-section .btn span {
        color: var(--white);
      }
      .section-number {
        right: 83px;
      }
      @media (max-width: 1024px) {
        .about-us-container {
          margin-top: 24px;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .about-us-section .section-title {
          font-size: 3.0rem;
        }
        .about-us-section .btn {
          margin-top: -7px;
        }
      }
      .section-number {
        right: 12px;
      }
    `}</style>
	</section>
)

export default AboutUs