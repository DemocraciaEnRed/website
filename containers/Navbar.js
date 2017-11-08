import React, { Component } from 'react'
import MobileMenu from '../components/MobileMenu'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mobile: false,
      active: null
    }

  }

handleActiveLink = (link) => (e) => {
  this.setState({
    active: link
  })
}

handleMobileMenu = (e) => {
  e.preventDefault()
  this.setState({
    mobile: !this.state.mobile
  })
}

render () {
  const links = [
  {
    href: "/",
    text: "Item1"
  },
  {
    href: "#header",
    text: "Item2"
  },
  {
    href: "#about",
    text: "Item3"
  },
  {
    href: "#about",
    text: "Item4"
  },
  {
    href: "#about",
    text: "Item5"
  },
  {
    href: "#about",
    text: "Item6"
  }
  ]

  return (
    <nav role='banner'>
      <a className='logo' href='/'></a>
      <ul className='nav-wide' role='navigation'>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a className='nav-link' className={`nav-link ${this.state.active === link.text ? ' active' : ''}`} onClick={this.handleActiveLink(link.text)}>{link.text}</a>
            </li>
          )
        })}
      </ul>
      <a className='mobile-button' role='navigation' onClick={this.handleMobileMenu}></a>
      {this.state.mobile &&
        <MobileMenu
        links={links}
        handleMobileMenu={this.handleMobileMenu}
        handleActiveLink={this.handleActiveLink}
        activeLink={this.state.active} />
      }
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

        MobileMenu {
          display: none;
        }

        MobileMenu .visible {
          display: flex;
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
}

}

export default Navbar