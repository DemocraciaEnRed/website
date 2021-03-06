import { t } from '../../../polyglot-modules/polyglot.js'

const data = [0, 1]
    

const Clip = () => (
  <div className='clip-container'>
    <img src={t('what-we-do.clip.img')} alt='conexiones latinoamericanas de innovación política'/>
    <div className='clip-text'>
      {data.map((i)=> {
        return <p key={i}>{t(`what-we-do.clip.text.${i}`)}</p>
      })}
    </div>
    <div className='btn-container'>
      <a href={t('what-we-do.clip.href')} target='_blank' rol='external'>
        <button className='btn'>
          <span className='action-text'>
            {t('what-we-do.clip.callToAction')}
          </span>
        </button>
      </a>
    </div>
    <style jsx>{`
      .clip-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 100px 0;
      }
      .clip-title {
        font-size: 3.6rem;
        letter-spacing: 0.13rem;
        text-align: center;
        text-transform: uppercase;
      }
      .clip-text {
        margin: 42px 0;
        max-width: 1270px;
      }
      .clip-text p {
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      img {
        max-width: 332px;
        max-height: 120px;
      }
      .clip-text p:last-child {
        margin-top: 30px;
      }
      @media (min-width: 1441px) {
        .clip-container {
          align-items: center;
          flex-direction: column;
        }
        .btn-container {
          display: flex;
          justify-content: center;
        }
      }
      @media (max-width: 1024px) {
        .clip-title {
          font-size: 3rem;
        }
      }
    `}</style>
  </div>
)

export default Clip
