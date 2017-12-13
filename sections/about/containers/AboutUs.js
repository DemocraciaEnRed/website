import { t } from '../../../polyglot-modules/polyglot.js'

const text = [0, 1]

const AboutUs = () => (
  <section className='about-us-section'>
    <h2 className='section-title'>{t('aboutUs.der.title')}</h2>
    <div>
      {text.map((i)=> {
        return <p key={i}>{t(`aboutUs.der.text.${i}`)}</p>
      })}
    </div>
    <style jsx>{`
      .about-us-section {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 135px 213px;
      }
      .section-title {
        font-size: 3.6rem;
        font-weight: var(--bold);
        margin-bottom: 77px;
        text-transform: uppercase;
      }
      .about-us-section p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      .about-us-section p:first-child {
        margin-bottom: 20px;
      }
      @media (max-width: 1024px) {
        .section-title {
          font-size: 3rem;
        }
      }
      @media (max-width: 768px) {
        .about-us-section {
          padding: 100px 24px;
        }
      }
    `}</style>
  </section>
) 

export default AboutUs