const MobileMenu = () => (
  <nav className='mobile-menu' role='navigation'>
    <a className='logo' href='/'></a>
    <style>{`
      .mobile-menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        padding: 24px;
        display: flex;
        flex-flow: column;
        width: 100vw;
        background-color: var(--white);
      }

      .logo {
        width: 135px;
        height: 35px;
        background-image: url('/static/assets/logo-mobile.svg');
        background-size: contain;
        background-repeat: no-repeat;
        flex: none;
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