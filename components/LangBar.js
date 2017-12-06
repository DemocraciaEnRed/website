const LangBar = ( {changeLang} ) => (
  <div className='lang-bar'>
    <a className={'es' === 'es' ? 'active' : ''} onClick={() => changeLang('es')}>ES</a>
    <span>/</span>
    <a className={'es' === 'en' ? 'active' : ''} onClick={() => changeLang('en')}>EN</a>
    <style jsx>{`
      .lang-bar {
        margin-left: auto;
        margin-right: 32px;
      }
      .lang-bar a, .lang-bar span {
        color: var(--white);
        font-size: 1.4rem;
        letter-spacing: 0.13rem;
      }
      .lang-bar a {
        cursor: pointer;
      }
      .lang-bar span {
        margin: 0 5px;
      }
      .lang-bar a.active {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default LangBar