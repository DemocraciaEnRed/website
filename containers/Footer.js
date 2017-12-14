import { t } from '../polyglot-modules/polyglot.js'
import MediaQuery from 'react-responsive'
import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const primaryLinks = [0, 1, 2, 3, 4, 5, 6]
const secondaryLinks = [0, 1]

const Footer = () => (
  <footer>
    <MediaQuery minDeviceWidth={1025} >
      <div>
        <p>{t('footer.copy')}</p>
      </div>
      <nav className='footer-navbar' role='navigation'>
        <ul className='primary-links-container'>
          {primaryLinks.map((i)=> {
            return (
              <li key={i}>
                <a>  
                  {t(`nav.primaryLinks.${i}.title`)}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className='secondary-links-container'>
        {secondaryLinks.map((i)=> {
          return (
            <Link href={t(`nav.secondaryLinks.${i}.href`)} key={i} >
              <li>
                <a>  
                  {t(`nav.secondaryLinks.${i}.title`)}
                </a>
              </li>
            </Link>
          )
        })}
    </ul>
      </nav>
      <div className='media-bar-container'>
        <SocialBar alignSelf={'flex-start'} iconsSize={'47px'} width={'473px'} mobileWidth={'283px'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
        <div className='end-text'>
          <span>the end</span>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1024} >
      <div className='media-bar-container'>
        <SocialBar alignSelf={'flex-start'} iconsSize={'28px'}  width={'473px'} mobileWidth={'283px'} justifyContent={'space-between'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
        <div className='end-text'>
          <span>the end</span>
        </div>
      </div>
    </MediaQuery>
    <style jsx>{`
      footer {
        align-items: flex-start;
        background-color: #383737;
        display: flex;
        flex-direction: column;
        height: 596px;
        justify-content: flex-end;
        padding: 0 115px 33px;
        position: relative;
        overflow-y: hidden;
      }
      .media-bar-container {
        align-items: center;
        display: flex;
        flex-direction: column;
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
          padding: 0 60px 60px;
        }
        .end-text  {
          bottom: -20px;
          right: 8px;
        }
        .end-text span {
          font-size: 6rem;
        }
      }
      @media (max-width: 768px) {
        .media-bar-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }
      }
    `}</style>
  </footer>
)

export default Footer