import Github from '../components/Github'

const DemocracyOs = () => (
  <div className='democracy-os-container'>
    <p>DemocracyOS es una plataforma de participación que permite a los ciudadanos informarse, debatir y votar en forma rápida y sencilla. </p>
    <p>DemocracyOS está concebida como una aplicación web versátil, simple y escalable de toma de decisiones colectivas que sirve como herramienta para los ciudadanos interesados en mejorar el acceso a la información, la participación cívica y abrir canales de interacción entre nuevos espacios de construcción de poder y el sistema político: activistas cívicos, organizaciones civiles y actores gubernamentales.</p>
    <p>Desarrollada en código abierto, con más de 50000 usuarios. <br />
      Utilizada por más de 40 instituciones, movimientos y partidos políticos de todo el mundo. <br />
      Disponible en 17 idiomas.<br />
      Funciona en cualquier dispositivo con un navegador web.
    </p>
    <div className='buttons-container'>
      <button className='btn'>
        <Github />
        <span className='action-text'>Repositorio</span>
      </button>
      <button className='btn'>
        <span className='action-text'>Más info</span>
      </button>
    </div>
    <style jsx>{`
      .democracy-os-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
      }
      p{
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      p:nth-child(2) {
        margin: 40px 0;
      }
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 42px;
        width: 511px;
      }
      .btn {
        margin-top: -3px;
      }
      @media (max-width: 520px) {
        .buttons-container {
          flex-direction: column;
          width: 100%;
        }
        .buttons-container .btn:first-child {
          margin-bottom: 20px;
        }
      }
    `}</style>
  </div>
)

export default DemocracyOs