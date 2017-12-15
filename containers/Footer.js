import { t } from '../polyglot-modules/polyglot.js'
import MediaQuery from 'react-responsive'
import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const primaryLinks = [0, 1, 2, 3, 4, 5, 6]
const secondaryLinks = [0, 1]

const Footer = () => (
  <footer>
    <span className='footer-copy'>{t('footer.copy')}</span>
    <nav className='footer-navbar' role='navigation'>
      <ul className='primary-links-container'>
        {primaryLinks.map((i)=> (
          <li key={i}>
            <a className='footer-navbar-link'>  
              {t(`nav.primaryLinks.${i}.title`)}
            </a>
          </li>
        ))}
      </ul>
      <ul className='secondary-links-container'>
        {secondaryLinks.map((i)=> (
          <Link href={t(`nav.secondaryLinks.${i}.href`)} key={i} >
            <li>
              <a className='footer-navbar-link'>  
                {t(`nav.secondaryLinks.${i}.title`)}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
    <MediaQuery minDeviceWidth={1025}>
      <SocialBar alignSelf={'flex-start'} iconsSize={'47px'} width={'331px'} mobileWidth={'283px'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1024} >
      <SocialBar alignSelf={'flex-end'} iconsSize={'28px'}  width={'331px'} mobileWidth={'283px'} justifyContent={'space-between'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
    </MediaQuery>
    <div className='end-text'>
      <span>the end</span>
    </div>
    <style jsx>{`
      footer {
        align-items: center;
        background-color: #383737;
        display: flex;
        flex-direction: column;
        height: 596px;
        justify-content: space-between;
        padding: 71px 237px 33px;
        position: relative;
        overflow-y: hidden;
      }
      .footer-copy {
        color: var(--white);
        font-size: 2.4rem;
        letter-spacing: 0.08rem;
      }
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
        width: 482px;
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
      .end-text {
        position: absolute;
        right: 30px;
        bottom: -70px;
      }
      .end-text span {
        font-size: 20rem;
        font-weight: 500;
        color: #bebebe;
      }
      @media (max-width: 1024px) {
        footer {
          align-items: center;
          height: 466px;
          justify-content: flex-end;
          padding: 60px;
        }
        .footer-copy {
          display: none;
        }
        .footer-navbar {
          display: none;
        }
        .end-text  {
          bottom: -20px;
          right: 8px;
        }
        .end-text span {
          font-size: 6rem;
        }
      }
    `}</style>
  </footer>
)

export default Footer