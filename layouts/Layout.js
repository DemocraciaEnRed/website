import Navbar from '../containers/Navbar'
import AboutUs from '../containers/AboutUs'

const Layout = (props) => (
  <div>
    <Navbar />
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