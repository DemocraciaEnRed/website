import { t } from '../../../polyglot-modules/polyglot.js'

const CivicStack = () => (
  <div className='civic-stack-container'>
    <img src={t('what-we-do.civicStack.img')} alt='Civic Stack' />
    <div className='civic-stack-text-container'>
      <p className='civic-stack-text'>{t('what-we-do.civicStack.text')}</p>
    </div>
    <div className='btn-container'>
      <a href={t('what-we-do.civicStack.href')} target='_blank' rel='external'>
        <button className='btn'>
          <span className='action-text'>
            {t('what-we-do.civicStack.callToAction')}
          </span>
        </button>
      </a>
    </div>
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
        max-width: 1270px;
        text-align: center;
      }
      .btn-container {
        display: flex;
        justify-content: center;
      }
      .btn {
        margin-top: -3px;
      }
      @media screen and (min-width: 1575px) {
        .civic-stack-container {
          align-items: center;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)

export default CivicStack