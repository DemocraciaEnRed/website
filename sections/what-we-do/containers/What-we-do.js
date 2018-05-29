import { t } from '../../../polyglot-modules/polyglot.js'

const text = [0, 1]

const WhatWeDo = () => (
  <section className='what-we-do-section'>
    <h2 className='section-title'>{t('what-we-do.der.title')}</h2>
    <div>
      {text.map((i)=> {
        return <p key={i}>{t(`what-we-do.der.text.${i}`)}</p>
      })}
    </div>
    <style jsx>{`
      .what-we-do-section {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 135px 213px;
      }
      .section-title {
        font-size: 3.6rem;
        font-weight: bold;
        margin-bottom: 77px;
        text-transform: uppercase;
      }
      .what-we-do-section div p{
        max-width: 1014px;
      }
      .what-we-do-section p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      .what-we-do-section p:first-child {
        margin-bottom: 20px;
      }
      @media (min-width: 1747px) {
        .what-we-do-section {
          flex-direction: column;
        }
      }
      @media (max-width: 1024px) {
        .section-title {
          font-size: 3rem;
        }
      }
      @media (max-width: 768px) {
        .what-we-do-section {
          padding: 100px 24px;
        }
      }
    `}</style>
  </section>
) 

export default WhatWeDo