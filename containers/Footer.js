import MediaQuery from 'react-responsive'
import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <MediaQuery minDeviceWidth={1025} >
      <div className='footer-container'>
        <SocialBar alignSelf={'flex-start'} iconsSize={'47px'} width={'473px'} mobileWidth={'283px'}/>
        <Link href='/'>
          <a className='footer-link'>términos y condiciones</a>
        </Link>
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1024} >
      <div className='mobile-footer-container'>
        <SocialBar alignSelf={'flex-start'} iconsSize={'28px'}  width={'473px'} mobileWidth={'283px'} justifyContent={'space-between'}/>
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
      @media (max-width: 1024px) {
        footer {
          align-items: center;
          height: 466px;
          padding: 0 60px 60px;
        }
    
      @media (max-width: 768px) {
        .mobile-footer-container {
          display: flex;
          width: 100%;
          justify-content: center;
        }
      }
    `}</style>
  </footer>
)

export default Footer