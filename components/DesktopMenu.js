const primaryLinks = [
  {
    href: '/',
    title: 'About us'
  },
  {
    href: '/',
    title: 'Case studies'
  },
  {
    href: '/',
    title: 'Collaborate'
  },
  {
    href: '/',
    title: 'Transparency'
  },
  {
    href: '/',
    title: 'Publications'
  },
  {
    href: '/',
    title: 'E-books'
  },
  {
    href: '/',
    title: 'Media'
  },
  {
    href: '/',
    title: 'Who we are'
  }
]

const secondaryLinks = [
  {
    href: '/',
    title: 'Contact us'
  },
  {
    href: '/',
    title: 'Jobs'
  }
]


const DesktopMenu = (props) => (
  <nav className='main-menu' role='navigation'>
    <a className='close-menu' onClick={props.handleMainMenu}></a>
    <ul className='primary-links-container'>
      {primaryLinks.map((link, i)=> 
        <li key={i}>
          <a onClick={props.handleActiveLink(link.title)} className={`desktop-menu-link ${props.activeLink === link.title ? ' active' : ''}`}>{link.title}</a>
        </li>
      )}
    </ul>
    <ul className='secondary-links-container'>
      {secondaryLinks.map((link, i)=> 
        <li key={i}>
          <a onClick={props.handleActiveLink(link.title)} className={`desktop-menu-link ${props.activeLink === link.title ? ' active' : ''}`}>{link.title}</a>
        </li>
      )}
    </ul>
    <style jsx>{`
      .main-menu {
        align-content: space-between;
        background-color: var(--white);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.57);
        display: flex;
        flex-wrap: wrap;
        height: 451px;
        left: 0;
        right: 0;
        margin: 61px auto;
        padding: 18px 18px 126px 90px;
        position: absolute;
        top: 0;
        width: 1420px;
        z-index: 99;
      }
      .close-menu {
        position: absolute;
        right: 0;
        align-self: flex-start;
        display: block;
        width: 18px;
        height: 18px;
        background-image: url('/static/assets/close-menu.svg');
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin-bottom: 62px;
      }
      .primary-links-container {
        align-items: space-between;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 261px;
        justify-content: space-between;
        width: 680px;
      }
      .secondary-links-container {
        align-items: space-between;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 168px;
      }
      .desktop-menu-link {
        display: block;
        color: var(--black);
        font-size: 3.2rem;
        letter-spacing: 1.1px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
    `}</style>
  </nav>
)

export default DesktopMenu