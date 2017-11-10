import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <SocialBar />
    <Link href=''>
      <a>Términos y Condiciones</a>
    </Link>
  </footer>
)

export default Footer