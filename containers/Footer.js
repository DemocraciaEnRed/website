import { t } from '../polyglot-modules/polyglot.js'
import MediaQuery from 'react-responsive'
import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <MediaQuery minDeviceWidth={1025} >
      <div className='footer-container'>
        <SocialBar alignSelf={'flex-start'} iconsSize={'47px'} width={'473px'} mobileWidth={'283px'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
        <Link href='/'>
          <a className='footer-link'>{t('footer.terms')}</a>
        </Link>
        <div className='end-text'>
          <span>the end</span>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1024} >
      <div className='mobile-footer-container'>
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
      .footer-container {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
      .footer-link {
        align-self: center;
        color: var(--white);
        font-size: 24px;
        font-weight: 300;
        margin-top: 33px;
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
        .mobile-footer-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }
      }
    `}</style>
  </footer>
)

export default Footer