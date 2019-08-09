import { t } from '../../../polyglot-modules/polyglot.js'

const Content = (props) => (
  <section className='content-container'>
    <div>
      <img src={props.icon}/>
    </div>
    <div className='title'><h1>{t('transparency.title')}</h1></div>
    <div className="section-subtitle">
      <p>{t('transparency.subtitle')}</p>
      <div className="section-text">
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
        
        letter-spacing: 0.13rem;
        text-align: center;
      }
    `}</style>
  </section>
)

export default Content