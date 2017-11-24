const CivicStack = () => (
  <div className='civic-stack-container'>
    <p className='civic-stack-text'> CivicStack es un repositorio de tecnologías de código libre para la participación ciudadana desarrolladas promovidas por organizaciones que usan o desarrollan tecnología abierta para mejorar procesos ciudadanos, fomentar la apertura de información y facilitar comportamientos cívicos online. </p>
    <button className='btn'>
      <span className='action-text'>
        Más info
      </span>
    </button>
    <style jsx>{`
      .civic-stack-container {
        border-bottom-style: solid;
        border-top-style: solid;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
      }
      .civic-stack-text {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        margin: 42px 0px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default CivicStack