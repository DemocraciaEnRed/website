import Link from 'next/link'
import Router from 'next/router'
import jump from 'jump.js'
import { t } from '../polyglot-modules/polyglot.js'

const primaryLinks = [0, 1, 2, 3, 4, 5, 6]
const secondaryLinks = [0, 1]


const handleLink = (hash) => (e) => {
    const node = document.getElementById(hash)
    window.location.pathname !== '/' ? Router.push({pathname: '/', hash: '#'+hash}) : jump(node, {offset: -50})
}

const FooterNavbar = () => (
  <nav className='footer-navbar' role='navigation'>
    <ul className='primary-links-container'>
      {primaryLinks.map((i)=> (
        <li key={i}>
          <a className='footer-navbar-link' onClick={handleLink(t(`nav.primaryLinks.${i}.href`))}>  
            {t(`nav.primaryLinks.${i}.title`)}
          </a>
        </li>
      ))}
    </ul>
    <ul className='secondary-links-container'>
      {secondaryLinks.map((i)=> (
        <Link prefetch href={t(`nav.secondaryLinks.${i}.href`)} key={i} >
          <li>
            <a className='footer-navbar-link'>  
              {t(`nav.secondaryLinks.${i}.title`)}
            </a>
          </li>
        </Link>
      ))}
    </ul>
    <style jsx>{`
      .footer-navbar {
        display: flex;
        flex-wrap: wrap;
        height: 202px;
        justify-content: space-between;
        width: 776px;
      }
      .primary-links-container {
        display: flex;
        flex-wrap: wrap;
        height: 202px;
        width: 650px;
      }
      .primary-links-container li {
        width: 50%;
      }
      .secondary-links-container {
        width: 126px;
      }
      .secondary-links-container li{
        margin-bottom: 18px;
      }
      .footer-navbar-link {
        color: var(--white);
        font-size: 2.4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
      }
      a {
        cursor: pointer;
      }
      @media (max-width: 1024px) {
        .footer-navbar {
          display: none;
        }
      }
    `}</style>
  </nav>
)

export default FooterNavbar