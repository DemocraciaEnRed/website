const links = [
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
  },
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
    <ul className='links-container'>
      {links.map((link, i)=> 
        <li key={i}>
          <a onClick={props.handleActiveLink(link.title)} className={`desktop-menu-link ${props.activeLink === link.title ? ' active' : ''}`}>{link.title}</a>
        </li>
      )}
    </ul>
    <style jsx>{`
      .main-menu {
        background-color: var(--white);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.57);
        height: 451px;
        padding: 113px 202px 126px 90px;
        width: 1420px;
      }
      .desktop-menu-link {
        color: var(--black);
        font-size: 3.2rem;
        letter-spacing: 1.1px;
        text-transform: uppercase;
      }
    `}</style>
  </nav>
)

export default DesktopMenu