import { t } from '../../../polyglot-modules/polyglot.js'


const Content = (props) => (
  <section className='content-section'>
    <div>
      {console.log(props.icon)}
      <img src={props.icon}/>
    </div>
    <h2 className='section-title'>{t('transparency.content.title')}</h2>
    <div className="section-subtitle">
      <p>{t('transparency.content.subtitle')}</p>
      <div className="section-text">
        <p></p>
      </div>
    </div>
    <style jsx>{`
      .content-section {
        padding-bottom: 0px;
        padding-top: 0px;
      }
      .content-section div {
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
  </section>
)

export default Content