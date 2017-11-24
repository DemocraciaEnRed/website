const content = [
 'DeR es una ONG fundada en 2014, que nace a partir de un diagnóstico sobre el status quo y porque nos hartamos de los diagnósticos y los diagnosticadores. Nacimos para construir práctica, técnica y poesía que permitan imaginar e implementar innovaciones en el sistema político para abrir los procesos de decisión, para redistribuir el poder.',
 'Para nosotros “incidir” significa propiciar cambios efectivos en la relación entre representantes y representados, un cambio que habilite nuevos esquemas de gobernanza (más colaborativos), nuevas lógicas burocráticas (más sensibles) y nuevos espacios públicos (digitales y territoriales).'
]

const AboutUs = () => (
  <section className='about-us-section'>
    <h2 className='section-title'>Democracia en Red</h2>
    <div>
      {content.map((it, i)=> {
        return <p key={i}>{it}</p>
      })}
    </div>
    <style jsx>{`
      .about-us-section {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 135px 213px;
      }
      .section-title {
        font-size: 3.6rem;
        font-weight: var(--bold);
        margin-bottom: 77px;
        text-transform: uppercase;
      }
      .about-us-section p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      .about-us-section p:first-child {
        margin-bottom: 20px;
      }
      @media (max-width: 1024px) {
        .section-title {
          font-size: 3rem;
        }
      }
      @media (max-width: 768px) {
        .about-us-section {
          padding: 135px 24px;
        }
      }
    `}</style>
  </section>
) 

export default AboutUs