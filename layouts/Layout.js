import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
    <Footer />
  <style jsx>{`
    div {
      width: 100vw;
      background-color: #fff;
    }
  `}</style>
  </div>
)

export default Layout