import React, { Component } from 'react'
import DesktopMenu from '../components/DesktopMenu'
import MobileMenu from '../components/MobileMenu'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: false,
      mobile: false,
      active: null
    }
  }

handleActiveLink = (link, href) => (e) => {
  if (href) {
    e.preventDefault()
    this.handleScroll(href)
  }
  this.setState({
    active: link
  }, this.handleMainMenu())
}

handleMainMenu = () => {
  let mobileMenu = window.innerWidth <= 1024 ? true : false
  this.setState({
    menu: !this.state.menu,
    mobile: mobileMenu
  })
}

handleScroll = (id) => {
  let anchor = document.getElementById(id)
  window.scrollTo(0, anchor.offsetTop -40)
}

render () {

  return (
    <nav role='banner'>
      <a className='logo' href='/'></a>
      <a className='menu-button' role='navigation' onClick={this.handleMainMenu}></a>
      {this.state.menu && this.state.mobile &&
        <MobileMenu
        handleMainMenu={this.handleMainMenu}
        handleActiveLink={this.handleActiveLink}
        activeLink={this.state.active} />
      }
      {this.state.menu && !this.state.mobile &&
        <DesktopMenu
        handleMainMenu={this.handleMainMenu}
        handleActiveLink={this.handleActiveLink}
        activeLink={this.state.active} />
      }
      <style jsx>{`
        nav {
          position: fixed;
          width: 100vw;
          height: 50px;
          padding: 0 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--dark-accent);
          box-shadow: inset 0 -1px 0 0 #555555;
          z-index: 1000;
        }
        
        .logo {
          width: 106px;
          height: 30px;
          background-image: url('/static/assets/logo-der.svg');
          background-size: contain;
          background-repeat: no-repeat;
          flex: none;
        }

        .menu-button {
          display: inline-block;
          width: 18px;
          height: 13.5px;
          flex: none;
          background-image: url('/static/assets/open-menu.svg');
          background-size: contain;
          background-repeat: no-repeat;
          cursor: pointer;
        }

        @media screen and (max-width: 860px) {
          nav {
            padding: 0 24px;
          }
        }
      `}</style>
    </nav>
  )
}

}

export default Navbar