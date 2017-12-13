import { t } from '../../../polyglot-modules/polyglot.js'

const EbookCard = ( {img, title, description, link}) => (
  <div className='ebook-card'>
    <img className='ebook-img' src={img} />
    <h3 className='subtitle ebook-title'>{title}</h3>
    <p className='subtext ebook-description'>{description}</p>
    <a href={link} rel='external' target='_blank'>
      <button className='btn ebook-btn'>
        <span className='action-text'>{t('index.ebooks.callToAction')}</span>
      </button>
    </a>
    <style jsx>{`
      .ebook-card {
        display: grid;
        grid-column-gap: 45px;
        grid-template-columns: 205px 227px;
        grid-template-rows: 31px auto 59px;
        grid-template-areas: 
          "sidebar header"
          "sidebar main"
          "sidebar footer";
        height: 280px;
      }
      .ebook-img {
        background-color: var(--gray);
        grid-area: sidebar;
        width: 100%;
      }
      .ebook-title {
        grid-area: header;
      }
      .ebook-description {
        grid-area: main;
        max-height: 200px;
        margin-top: 37px;
        overflow: hidden;
      }
      .ebook-btn {
        grid-area: footer;
        height: 37px;
        width: 200px;
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
          grid-column-gap: 28px;
          grid-template-columns: 129px 146px;
          grid-template-rows: auto auto 39px;
          height: 176px;
          margin-right: 48px;
        }
        .ebook-title {
          font-size: 1.5rem;
        }
        .ebook-img {
          height: 100%;
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
      @media screen and (max-width: 500px) {
        .ebook-card {
          margin-right: 24px;
        }
      }
    `}</style>
  </div>

)

export default EbookCard