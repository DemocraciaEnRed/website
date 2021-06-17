import MediaQuery from 'react-responsive'
import { t } from '../polyglot-modules/polyglot.js'
import FooterNavbar from '../components/FooterNavbar'
import SocialBar from '../components/SocialBar'

const Footer = () => (
  <footer>
    <span className='footer-copy'>{t('footer.copy')}</span>
    <FooterNavbar />
    <MediaQuery minDeviceWidth={1025}>
      <SocialBar margin= {'0 auto'} alignSelf={'flex-start'} iconsSize={'47px'} width={'331px'} mobileWidth={'283px'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1024} >
      <SocialBar margin= {'0 auto'} alignSelf={'flex-end'} iconsSize={'28px'}  width={'331px'} mobileWidth={'283px'} justifyContent={'space-between'} iconHover={'#bebebe'} iconMobileHover={'#bebebe'} />
    </MediaQuery>
   
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
          height: 100px;
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