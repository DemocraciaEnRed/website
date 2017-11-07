const secondaryLinks = [
{
  href: "/contact",
  text: "Contact"
},
{
  href: "/jobs",
  text: "Jobs"
}
]

const MobileMenu = (props) => (
  <nav className='mobile-menu' role='navigation'>
    <header>
      <a className='logo' href='/'></a>
      <a className='close-menu'></a>
    </header>
    <ul className='primary-links'>
      {props.links.map((link, i) => {
        return (
          <li key={i}>
            <a className='nav-link'>{link.text}</a>
          </li>
        )
      })}
    </ul>
    <ul className='secondary-links'>
      {secondaryLinks.map((link, i) => {
        return (
          <li key={i}>
            <a className='nav-link'>{link.text}</a>
          </li>
        )
      })}
    </ul>
    <style>{`
      .mobile-menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        padding: 24px;
        display: flex;
        flex-direction: column;
        width: 100vw;
        background-color: var(--white);
      }

      header {
        display: flex;
        justify-content: space-between;
      }

      .logo {
        margin: 6px 8px 16px 0;
        width: 135px;
        height: 35px;
        background-image: url('/static/assets/logo-mobile.svg');
        background-size: contain;
        background-repeat: no-repeat;
        flex: none;
      }

      .close-menu {
        display: inline-block;
        width: 20px;
        height: 20px;
        flex: none;
        background-image: url('/static/assets/close-mobile.svg');
        background-size: contain;
        background-repeat: no-repeat;

      ul.primary-links {
        display: block;
        margin: 16px 0 0 72px;
        padding-top: 32px;
        border-top: solid 2px var(--dark-accent);
        min-height: 50px;
      }

      .nav-link {
        margin: 16px 0;
        font-family: var(--regular);
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      @media screen and (min-width: 860px) {
        .mobile-menu {
          display: none;
        }
      }
    `}</style>
  </nav>
)

export default MobileMenu