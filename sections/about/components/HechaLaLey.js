import { t } from '../../../polyglot-modules/polyglot.js'

const HechaLaLey = () => (
  <div className='hechalaley-container'>
    <h2>{t('aboutUs.hechaLaLey.title')}</h2>
    <p>{t('aboutUs.hechaLaLey.text')}</p>
    <a href={t('aboutUs.hechaLaLey.href')} target='_blank' rol='external'>
      <button className='btn'>
        <span className='action-text'>
          {t('aboutUs.hechaLaLey.callToAction')}
        </span>
      </button>
    </a>
    <style jsx>{`
      .hechalaley-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
      }
      .hechalaley-container h2 {
        font-size: 3.6rem;
        letter-spacing: 0.13rem;
        text-transform: uppercase;
      }
      .hechalaley-container p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        margin-top: 42px;
        text-align: center;
      }
      .hechalaley-container .btn {
        margin-top: 42px;
      }
      @media (max-width: 1024px) {
        .hechalaley-container h2 {
          font-size: 3rem;
        }
      }
    `}</style>
  </div>
)

export default HechaLaLey