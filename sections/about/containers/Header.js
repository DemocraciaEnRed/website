import { t } from '../../../polyglot-modules/polyglot.js'

const Header = () => (
  <header>
    <h1 className='about-us-title'>{t('aboutUs.title')}</h1>
    <style jsx>{`
      header {
        background-color: #dedede;
        display: flex;
        align-items: flex-end;
        height: 35rem;
        padding: 49px 81px 21px;
        width: 100%;
      }
      .about-us-title {
        color: var(--white);
        font-size: 4.2rem;
      }
    `}</style>
  </header>
)

export default Header