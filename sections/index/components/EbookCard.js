import { t } from '../../../polyglot-modules/polyglot.js'

const EbookCard = ( {img, title, description, link}) => (
  <div className='ebook-card'>
    <img className='ebook-img' src={img} />
    <div className='ebook-texts'>
      <h3 className='subtitle ebook-title'>{title}</h3>
      <p className='subtext ebook-description'>{description}</p>
      <a href={link} rel='external' target='_blank'>
        <button className='btn ebook-btn'>
          <span className='action-text'>{t('index.ebooks.callToAction')}</span>
        </button>
      </a>
    </div>
    <style jsx>{`
      .ebook-card {
        height: 320px;
        width: 445px;
        margin-top: 60px;
      }
      .ebook-img {
        background-color: var(--gray);
        height: 100%;
        float:left;
        margin-right: 15px;
      }
      .ebook-description {
        margin-top: 37px;
        text-align: left;
      }
      .ebook-btn {
        height: 37px;
        width: 200px;
        margin-top: 10px;
      }
      .ebook.btn:active {
        border-bottom: 0.005rem solid var(--dark-accent);
        margin-top: 0.3rem;
      }
      .action-text {
        font-size: 2.1rem;
      }
      @media screen and (max-width: 1024px) {
        .ebook-card {
          height: 200px;
          width: 300PX;
        }
        .ebook-title {
          font-size: 1.5rem;
        }
        .ebook-img {
          height: 200px;
        }
        .ebook-description {
          font-size: 1.4rem;
          margin-top: 0;
        }
        .ebook-btn {
          height: 27px;
          margin-bottom: 23px;
          width: 134px;
        }
        .action-text {
        font-size: 1.4rem;
        }
      }
    `}</style>
  </div>

)

export default EbookCard