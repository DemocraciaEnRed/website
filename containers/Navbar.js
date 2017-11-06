
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
    <ul role='navigation'>
      {links.map((link, i) => {
        return (
          <li key={i}>
            <a className='nav-link' onClick={changeActiveNavLink}>{link.text}</a>
          </li>
        )
      })}
    </ul>
    <style jsx>{`
      nav {
        height: 100px;
        padding: 0 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--dark-accent);
        box-shadow: inset 0 -1px 0 0 #555555;

      }

      @media screen and (max-width: 1024px) {
        nav {
          padding: 0 20px;
        }
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

      ul {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        list-style-type: none;
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
        text-decoration: none;
        letter-spacing: 0.7px;
        cursor: pointer;
      }

      .active {
        font-weight: bold;
        color: var(---black);
      }

    `}</style>
  </nav>
)

export default Navbar