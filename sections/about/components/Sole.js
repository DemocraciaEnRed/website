import { t } from '../../../polyglot-modules/polyglot.js'

const text = [0, 1, 2, 3]
const items = [0, 1, 2, 3, 4]

const Sole = () => (
  <div className='sole-container'>
    <img src={t('aboutUs.sole.img')} alt='SOLE'/>
    <div>
      {text.map((i)=> {
        return <p key={i}>{t(`aboutUs.sole.text.${i}`)}</p>
      })}
    </div>
    <ul>
      {items.map((i)=> {
        return <li key={i}>{t(`aboutUs.sole.items.${i}`)}</li>
      })}
    </ul>
    <a href={t('aboutUs.sole.href')} target='_blank' rel='external'>
      <button className='btn'>
        <span className='action-text'>
          {t('aboutUs.sole.callToAction')}
        </span>
      </button>
    </a>
    <style jsx>{`
      .sole-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 60px 0 100px;
      }
      .sole-container p{
        font-size: 2rem;
        letter-spacing: 0.13rem;
        margin-top: 20px;
        text-align: center;
      }
      .sole-container p:first-child{
        margin-top: 43px;
      }
      .sole-container ul {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        list-style-type: disc;
        margin: 41px 192px 42px;
      }
      .sole-container .btn {
        margin-top: -3px;
      }
      @media (min-width: 1441px) {
        .sole-container {
          align-items: center;
          flex-direction: column;
        }
        .sole-container p {
          max-width: 1270px;
        }
        .sole-container ul {
          max-width: 886px;
        }
      }
      @media (max-width: 768px) {
        .sole-container ul {
          margin-left: 24px;
          margin-right: 0;
        }
      }
    `}</style>
  </div>
)

export default Sole