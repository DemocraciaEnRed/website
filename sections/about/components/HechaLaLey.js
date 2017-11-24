const HechaLaLey = () => (
  <div className='hechalaley-container'>
    <h2>Hecha la ley</h2>
    <p>Inspirado en la idea de bill-tracking, “Hecha la Ley” es un desarrollo de código abierto que funciona calculando las diferencias en un proyecto de Ley en la medida en que avanza en el trámite parlamentario. Hoy en etapa de prueba, es una herramienta concebida para la prensa especializada y el cuerpo profesional (asesores y periodistas) de los parlamentos.</p>
    <button className='btn'>
      <span className='action-text'>
        Más info
      </span>
    </button>
    <style jsx>{`
      .hechalaley-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
      }
      .hechalaley-container h2 {
        font-size: 3.6rem;
        letter-spacing: 0.13rem;
        text-transform: uppercase;
      }
      .hechalaley-container p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        margin-top: 42px;
        text-align: center;
      }
      .hechalaley-container .btn {
        margin-top: 42px;
      }
    `}</style>
  </div>
)

export default HechaLaLey