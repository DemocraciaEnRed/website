import { t } from '../../../polyglot-modules/polyglot.js'

const text = [0, 1, 2]
const items = [0, 1, 2]

const Rinp = () => (
  <div className='rinp-container'>
    <img src={t('aboutUs.rinp.img')} alt='Red de Innovación Política Logo'/>
    <div className='rinp-text'>
      {text.map((i)=> {
        return <p key={i}>{t(`aboutUs.rinp.text.${i}`)}</p>
      })}
    </div>
    <a href={t('aboutUs.rinp.href')} rel='external' target="_blank">
      <button className='btn'>
        <span className='action-text'>
          {t('aboutUs.rinp.callToAction')}
        </span>
      </button>
    </a>
    <style jsx>{`
      .rinp-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 100px 0;
        position: relative;
      }
      .rinp-text {
        margin-top: 41px;
      }
      .rinp-text p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      .rinp-text p:last-child {
        margin-top: 38px;
        margin-bottom:45px;
      }
      .rinp-list {
        margin: 38px 192px 42px;
      }
      .rinp-list p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: left;
        margin-bottom: 38px;
      }
      .rinp-list ul {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        list-style-type: disc;
      }
      .rinp-container:after{
        content : '';
        position: absolute;
        left    : 10%;
        bottom  : 0;
        height  : 1px;
        width   : 80%;
        border-bottom:1px solid #979797;
      }
      @media (min-width: 1441px) {
        .rinp-container {
          align-items: center;
          flex-direction: column;
        }
        .rinp-text, .rinp-list {
          max-width: 1270px;
        }
      }
      @media (max-width: 768px) {
        .rinp-list {
          margin-left: 24px;
          margin-right: 0;
        }
      }
    `}</style>
  </div>
)

export default Rinp