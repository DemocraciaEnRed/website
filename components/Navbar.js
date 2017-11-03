
let activeNavLink = null;

function changeActiveNavLink (obj) {
console.log(obj)
  // if (!activeNavLink === null) {
  //   obj.className='active'
  // } else {
  //   activeNavLink.className.replace(' active ','')
  //   obj.className= obj.className + ' active '
  // }

  // activeNavLink = obj;
}


const Navbar = () => (
  <nav role='banner'>
    <a className='logo' href='/'></a>
    <ul role='navigation'>
      <li>
        <a className='nav-link' onClick={changeActiveNavLink(this)}>Selected</a>
      </li>
      <li>
        <a className='nav-link' onClick={changeActiveNavLink(this)}>Item</a>
      </li>
      <li>
        <a className='nav-link' href='#'>Item</a>
      </li>
      <li>
        <a className='nav-link' href='#'>Item</a>
      </li>
    </ul>
    <style jsx>{`
      nav {
        height: 100px;
        padding: 0 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #c5c5c5;
        box-shadow: inset 0 -1px 0 0 #555555;

      }
      
      .logo {
        width: 211px;
        height: 58px;
        background-image: url('/static/assets/logo.svg');
        background-size: contain;
        background-repeat: no-repeat;
      }

      ul {
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
        font-family: 'Dosis-Regular';
        font-size: 24px;
        color: #6a6a6a;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.7px;
      }

      .active {
        font-weight: bold;
      }

    `}</style>
  </nav>
)

export default Navbar