import { t } from '../../../polyglot-modules/polyglot.js'
import DoughnutGraphic  from "./DoughnutGraphic"

const Content = (props) => (
  <div className='content-container'>
    <div>
      <img src={props.icon}/>
    </div>
    <h2 className='section-title'>{t('transparency.title')}</h2>
    <div className="section-subtitle">
      <p>{t('transparency.subtitle')}</p>
      <div className="section-text">
        <DoughnutGraphic />
      </div>
    </div>
    <style jsx>{`
      .content-container {
        padding-bottom: 0px;
        padding-top: 0px;
      }
      .content-container div {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
        margin-bottom:20px;
        margin-top: 20px;
      }
      .section-text {
        font-size: 2.4rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Content