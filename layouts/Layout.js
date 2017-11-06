import Navbar from '../containers/Navbar'
import AboutUs from '../containers/AboutUs'
import Header from '../containers/Header'
import CaseStudies from '../containers/CaseStudies'

const Layout = (props) => (
  <div>
    <Navbar />
    <Header />
    {props.children}
    <AboutUs />
    <CaseStudies />
  <style jsx>{`
    div {
      width: 100vw;
      background-color: #fff;
    }
  `}</style>
  </div>
)

export default Layout