import Link from 'next/link'

const primaryLinks = [
  {
    href: "about",
    text: "About us"
  },
  {
    href: "case-studies",
    text: "Case studies"
  },
  {
    href: "collaborate",
    text: "Collaborate"
  },
  {
    href: "collaborate",
    text: "Transparency"
  },
  {
    href: "publications",
    text: "Publications"
  },
  {
    href: "ebooks",
    text: "E-books"
  },
  {
    href: "media",
    text: "Media"
  },
  {
    href: "who-we-are",
    text: "Who we are"
  }
]

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
  <nav className='main-menu' role='navigation'>
    <header>
      <a className='logo' href='/'></a>
      <a className='close-menu' onClick={props.handleMainMenu}></a>
    </header>
    <ul className='primary-links'>
      {primaryLinks.map((link, i) => {
        return (
          <li key={i}>
            <a onClick={props.handleActiveLink(link.text, link.href)} className={`menu-link ${props.activeLink === link.text ? ' active' : ''}`}>{link.text}</a>
          </li>
        )
      })}
    </ul>
    <ul className='secondary-links'>
      {secondaryLinks.map((link, i) => {
        return (
          <li key={i}>
            <Link href={link.href}>
              <a onClick={props.handleActiveLink(link.text)} className={`menu-link ${props.activeLink === link.text ? ' active' : ''}`}>{link.text}</a>
            </Link >
          </li>
        )
      })}
    </ul>
    <style>{`
      .main-menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        padding: 24px;
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        overflow-y: auto;
      }

      header {
        display: flex;
        justify-content: space-between;
        flex: none;
      }

      .logo {
        margin: 6px 8px 8px 0;
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
        background-image: url('/static/assets/close-menu.svg');
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
      }

      .primary-links, .secondary-links {
        display: inline-block;
        margin: 24px 0 0 4em;
        width: fit-content;
        padding-top: 24px;
        border-top: solid 2px var(--dark-accent);
      }

      .primary-links li, .secondary-links li {
        padding: 8px 0;
      }

      .menu-link {
        margin: 16px 0;
        color: var(--dark-gray);
        font-family: var(--regular);
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      .active, .menu-link:hover {
        color: var(--dark-accent);
      }
    `}</style>
  </nav>
)

export default MobileMenu