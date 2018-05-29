import { t } from '../../../polyglot-modules/polyglot.js'

const data = [0, 1]

const debatirEnRedes = () => (
  <div className='debatirEnRedes-container'>
    <div className='debatirEnRedes-text-container'>
    <h2 className='debatirEnRedes-title'>{t('what-we-do.debatirEnRedes.title')}</h2>
    {data.map((i)=> {
        return <p className='debatirEnRedes-text' key={i}>{t(`what-we-do.debatirEnRedes.text.${i}`)}</p>
      })}
    </div>
    <div className='btn-container'>
      <a href={t('what-we-do.debatirEnRedes.href')} target='_blank' rel='external'>
        <button className='btn'>
          <span className='action-text'>
            {t('what-we-do.debatirEnRedes.callToAction')}
          </span>
        </button>
      </a>
    </div>
    <style jsx>{`
      .debatirEnRedes-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
        position: relative;
      } 

      .debatirEnRedes-container:before {
        border-bottom:1px solid #979797;
        content : '';
        height: 1px;
        left: 10%;
        position: absolute;
        top: 0;
        width: 80%;
      } 
      .debatirEnRedes-container:after{
        content : '';
        position: absolute;
        left    : 10%;
        bottom  : 0;
        height  : 1px;
        width   : 80%;
        border-bottom:1px solid #979797;
      }
      .debatirEnRedes-title {
        font-size: 3.6rem;
        font-weight: bold;
        margin-bottom: 77px;
        text-transform: uppercase;
        text-align: center;

      }
      .debatirEnRedes-text {
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
        .debatirEnRedes-container {
          align-items: center;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)

export default debatirEnRedes