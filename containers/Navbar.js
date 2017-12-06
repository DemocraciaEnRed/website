import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import jump from 'jump.js'
import LangBar from '../components/LangBar'
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

  handleLink = (hash) => (e) => {
    const node = document.getElementById(hash)
    this.handleMainMenu()
    window.location.pathname !== '/' ? Router.push({pathname: '/', hash: '#'+hash}) : jump(node, {offset: -50})
  }

  handleMainMenu = () => {
    let mobileMenu = window.innerWidth <= 1024 ? true : false
    this.setState({
      menu: !this.state.menu,
      mobile: mobileMenu
    })
  }

  render () {
    return (
      <nav role='banner'>
        <Link href='/'>
          <a className='logo' />
        </Link>
        <LangBar 
          changeLang={this.props.changeLang}
          currentLang={this.props.currentLang} 
        />
        <a className='menu-button' role='navigation' onClick={this.handleMainMenu}></a>
        {this.state.menu && this.state.mobile &&
          <MobileMenu
          handleLink={this.handleLink}
          handleMainMenu={this.handleMainMenu} />
        }
        {this.state.menu && !this.state.mobile &&
          <DesktopMenu
          handleLink={this.handleLink}
          handleMainMenu={this.handleMainMenu} />
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