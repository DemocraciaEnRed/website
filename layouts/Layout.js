import Navbar from '../containers/Navbar'
import AboutUs from '../containers/AboutUs'
import Header from '../containers/Header'

const Layout = (props) => (
  <div>
    <Navbar />
    <Header />
    {props.children}
    <AboutUs />
  <style jsx>{`
    div {
      width: 100vw;
      background-color: #fff;
    }
  `}</style>
  </div>
)

export default Layout