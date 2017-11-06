import MobileMenu from '../components/MobileMenu'

let activeNavLink = null;

function changeActiveNavLink (e) {
  if (activeNavLink) {
    activeNavLink.classList.remove('active')
    e.target.classList.add('active')
  } else {
    e.target.classList.add('active')
  }
  activeNavLink = e.target;
}

const links = [
{
  href: "/",
  text: "Selected"
},
{
  href: "#header",
  text: "Item"
},
{
  href: "#about",
  text: "Item"
},
{
  href: "#about",
  text: "Item"
},
{
  href: "#about",
  text: "Item"
},
{
  href: "#about",
  text: "Item"
}
]

const Navbar = () => (
  <nav role='banner'>
    <a className='logo' href='/'></a>
    <ul className='nav-wide' role='navigation'>
      {links.map((link, i) => {
        return (
          <li key={i}>
            <a className='nav-link' onClick={changeActiveNavLink}>{link.text}</a>
          </li>
        )
      })}
    </ul>
    <div className='mobile-button' role='navigation'></div>
    <MobileMenu />
    <style jsx>{`
      nav {
        position: fixed;
        width: 100vw;
        height: 100px;
        padding: 0 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--dark-accent);
        box-shadow: inset 0 -1px 0 0 #555555;
      }
      
      .logo {
        width: 211px;
        height: 58px;
        background-image: url('/static/assets/logo.svg');
        background-size: contain;
        background-repeat: no-repeat;
        flex: none;
        margin-right: 20px;
      }

      ul.nav-wide {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        text-align: center;
      }

      ul li {
        display: inline-block;
      }

      li + li {
        margin-left: 45px;
      }

      .nav-link {
        padding: 15px 0;
        font-family: var(--regular);
        font-size: 2.4rem;
        color: var(--white);
        text-transform: uppercase;
        letter-spacing: 0.7px;
        cursor: pointer;
      }

      .active {
        font-weight: bold;
        color: var(---black);
      }

      .mobile-button {
        display: none;
      }

      @media screen and (max-width: 1024px) {
        nav {
          padding: 0 24px;
        }
      }


      @media screen and (max-width: 860px) {
        nav {
          height: 64px;
        }

        .logo {
          width: 125px;
          height: 35px;
        }

        ul.nav-wide {
          display: none;
        }

        .mobile-button {
          display: inline-block;
          width: 18px;
          height: 13.5px;
          flex: none;
          background-image: url('/static/assets/nav-mobile.svg');
          background-size: contain;
          background-repeat: no-repeat;
        }

      }

    `}</style>
  </nav>
)

export default Navbar