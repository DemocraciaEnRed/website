import { t } from '../../../polyglot-modules/polyglot.js'

const ClosedSearch = () => (
  <div className='closed-search-container'>
    <p className='closed-search-text'>{t('jobs.closedSearch.text.0')}<br/>
      {t('jobs.closedSearch.text.1')}<a className='closed-search-link'>{t('jobs.closedSearch.link')}</a></p>
  <style>{`
    .closed-search-container {
      display: flex;
      justify-content: center;
      margin-top: 19px;
      margin-left: auto;
      margin-right: auto;
    }
    .closed-search-text {
      color: var(--gray);
      font-size: 3.6rem;
      text-align: center;
    }
    .closed-search-link {
      color: var(--dark-accent);
      cursor: pointer;
      text-decoration: underline;
    }
    @media (max-width: 1024px) {
      .closed-search-container {
        margin-top: 0;
      }
      .closed-search-text {
        font-size: 2.0rem;
      }
    }
  `}</style>
  </div>
)

export default ClosedSearch