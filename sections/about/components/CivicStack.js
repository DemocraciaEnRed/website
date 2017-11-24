import CivicStackLogo from './CivicStackLogo.js'

const CivicStack = () => (
  <div className='civic-stack-container'>
    <CivicStackLogo />
    <p className='civic-stack-text'> CivicStack es un repositorio de tecnologías de código libre para la participación ciudadana desarrolladas promovidas por organizaciones que usan o desarrollan tecnología abierta para mejorar procesos ciudadanos, fomentar la apertura de información y facilitar comportamientos cívicos online. </p>
    <button className='btn'>
      <span className='action-text'>
        Más info
      </span>
    </button>
    <style jsx>{`
      .civic-stack-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
        position: relative;
      } 
      .civic-stack-container:before {
        border-bottom:1px solid #979797;
        content : '';
        height: 1px;
        left: 10%;
        position: absolute;
        top: 0;
        width: 80%;
      } 
      .civic-stack-container:after{
        content : '';
        position: absolute;
        left    : 10%;
        bottom  : 0;
        height  : 1px;
        width   : 80%;
        border-bottom:1px solid #979797;
      }
      .civic-stack-text {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        margin: 42px 0px;
        text-align: center;
      }
      .btn {
        margin-top: -3px;
      }
    `}</style>
  </div>
)

export default CivicStack