import { t } from '../../../polyglot-modules/polyglot.js'

const HechaLaLey = () => (
  <div className='hechalaley-container'>
    <img src='/static/assets/about/logohechalaley.png' alt='Hecha la ley' className='logo' />
    <p>{t('what-we-do.hechaLaLey.text')}</p>
    <div className='btn-container'>
      <a href={t('what-we-do.hechaLaLey.href')} target='_blank' rol='external'>
        <button className='btn'>
          <span className='action-text'>
            {t('what-we-do.hechaLaLey.callToAction')}
          </span>
        </button>
      </a>
    </div>
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
      .logo {
        width: 295px;
        height: 30px;
      }
      @media (min-width: 1441px) {
        .hechalaley-container {
          align-items: center;
          flex-direction: column;
        }
        .hechalaley-container p {
          max-width: 1270px;
        }
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