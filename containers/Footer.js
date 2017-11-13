import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className='footer-container'>
      <SocialBar alignSelf={'flex-start'} iconsSize={'47px'} width={'473px'}/>
      <Link href='/'>
        <a className='footer-link'>términos y condiciones</a>
      </Link>
    </div>
    <style jsx>{`
      footer {
        align-items: flex-start;
        background-color: #383737;
        display: flex;
        flex-direction: column;
        height: 596px;
        justify-content: flex-end;
        padding: 0 115px 30px;
      }
      .footer-container {
        display: flex;
        flex-direction: column;
      }
      .footer-link {
        align-self: center;
        color: var(--white);
        font-size: 24px;
        font-weight: 300px;
        margin-top: 33px;
      }

    `}</style>
  </footer>
)

export default Footer