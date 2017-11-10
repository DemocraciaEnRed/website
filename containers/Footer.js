import SocialBar from '../components/SocialBar'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <SocialBar />
    <Link href=''>
      <a>Términos y Condiciones</a>
    </Link>
    <style jsx>{`
      footer {
        align-items: flex-end;
        background-color: #383737;
        display: flex;
        flex-wrap: wrap;
        padding: 455px 115px 33px;
      }

    `}</style>
  </footer>
)

export default Footer