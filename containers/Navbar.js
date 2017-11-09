import React, { Component } from 'react'
import MainMenu from '../components/MainMenu'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: false,
      active: null
    }
  }

handleActiveLink = (link) => (e) => {
  this.setState({
    active: link
  })
}

handleMainMenu = (e) => {
  e.preventDefault()
  this.setState({
    menu: !this.state.menu
  })
}

render () {

  return (
    <nav role='banner'>
      <a className='logo' href='/'></a>
      <a className='menu-button' role='navigation' onClick={this.handleMainMenu}></a>
      {this.state.menu &&
        <MainMenu
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