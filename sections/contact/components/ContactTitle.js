import { t } from '../../../polyglot-modules/polyglot.js'

const ContactTitle = () => (
  <div className='contact-title-container'>
    <h2 className='section-title'>{t('contact.contactUs')}</h2>
    <p className='regular-text'>{t('contact.copy.0')}</p>
    <p className='regular-text'>{t('contact.copy.1')}</p>
    <style jsx>{`
      .contact-title-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .section-title {
        font-size: 3.6rem;
        margin-bottom: 7px;
        text-align: center;
        text-transform: uppercase;
      }
      .regular-text {
        color: var(--black);
        font-size: 2.4rem;
        text-align: center;
      }
      @media (max-width: 1024px) {
        .section-title {
          font-size: 3rem;
        }
        .regular-text {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </div>
)

export default ContactTitle