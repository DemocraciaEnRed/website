import Milestone from '../components/Milestone'

const collaborateItems = [
  {
    title: 'Collaborate',
    subtitle: '¿Cómo puedo colaborar?',
    paragraph: 'Ayudanos a llegar a más personas. Hay muchas maneras de colaborar.',
    button: 'Escribinos'
  },
  {
    title: 'Transparency',
    subtitle: '¿Quién nos financia? ¿Cómo gastamos?',
    paragraph: 'Aquí toda la información contable resumida y con su soporte documental.',
    button: 'Action'
  }
]

const Collaborate = () => (
  <section className='collaborate-section'>
    {collaborateItems.map((it, i)=> 
        <div className='collaborate-container' key={i}>
          <h2 className='section-title'> {it.title} </h2>
          <Milestone 
            className='collaborate-milestone'
            title={it.subtitle} 
            subtitle={it.paragraph} 
            button={it.button}
            containerWidth={'auto'} />
        </div>     
    )}
    <style jsx>{`
      .collaborate-section {
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;
      }
      .collaborate-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 486px;
      }
      .collaborate-container .section-title {
        align-self: flex-start;
        margin-bottom: 53px;
      }
      @media (max-width: 768px) {
        .collaborate-section {
          flex-direction: column;
          align-items: center;
        }
      }
    `}</style>
  </section>
)

export default Collaborate