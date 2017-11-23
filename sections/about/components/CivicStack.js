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
        padding-bottom: 100px;
        padding-top: 100px;
      }
      .civic-stack-text {
        margin: 42px 0px;
      }
    `}</style>
  </div>
)

export default CivicStack