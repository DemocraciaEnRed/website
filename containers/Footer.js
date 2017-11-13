import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <SocialBar alignSelf={'flex-start'} iconsSize={'47px'}/>
    <Link href='/'>
      <a>Términos y Condiciones</a>
    </Link>
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

    `}</style>
  </footer>
)

export default Footer