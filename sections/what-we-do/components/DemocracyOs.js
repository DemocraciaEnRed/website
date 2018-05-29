import { t } from '../../../polyglot-modules/polyglot.js'
import Github from '../components/Github'

const data = [0, 1]
const data2 = [0]
const items = [0, 1, 2, 3,4]

const DemocracyOs = () => (
  <div className='democracy-os-container'>
    <img src={t('what-we-do.democracyOs.img')} alt='Democracy OS' className='democracy-os-logo'/>
    <div className='democracy-os-text'>
      {data.map((i)=> {
        return <p key={i}>{t(`what-we-do.democracyOs.text.${i}`)}</p>
      })}
    </div>
    <ul className='democracy-os-list'>
      {items.map((i)=>{
        return <li key={i}>{t(`what-we-do.democracyOs.list.${i}`)}</li>
      })}
    </ul>
    <div className='democracy-os-text'>
      {data2.map((i)=> {
        return <p key={i}>{t(`what-we-do.democracyOs.text-2.${i}`)}</p>
      })}
    </div>
    <div className='buttons-container'>
      <a href={t('what-we-do.democracyOs.repourl')}  target='_blank' rel='external'>
        <button className='btn'>
          <Github />
          <span className='action-text'>{t('what-we-do.democracyOs.repo')}</span>
        </button>
      </a>
      <a href={t('what-we-do.democracyOs.href')}  target='_blank' rel='external'>
        <button className='btn'>
          <span className='action-text'>{t('what-we-do.democracyOs.callToAction')}</span>
        </button>
      </a>
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
      .democracy-os-logo {
        margin-bottom: 38px;
      }
      p{
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      p:nth-child(2) {
        margin: 40px 0;
      }
      .democracy-os-list {
        list-style: disc;
        font-size: 2.0rem;
        letter-spacing: 0.13rem;
        padding-bottom:3rem;
      }
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 45px;
        width: 511px;
      }
      .btn {
        margin-top: -3px;
      }
      @media (max-width: 768px) {
        .democracy-os-list {
          margin-left: 24px;
          margin-right: 0;
        }
      }
      @media (min-width: 1441px) {
        .democracy-os-text, .democracy-os-list {
          max-width: 1270px;
        }
      }
      @media (max-width: 520px) {
        .buttons-container {
          align-items: center;
          flex-direction: column;
          width: 100%;
        }
        .buttons-container .btn:first-child {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 375px) {
        .democracy-os-logo {
          width: 300px;
        }
      }
    `}</style>
  </div>
)

export default DemocracyOs