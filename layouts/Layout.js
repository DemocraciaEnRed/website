import Navbar from '../containers/Navbar'
import Header from '../containers/Header'

const Layout = (props) => (
  <div>
    <Navbar />
    <Header />
    {props.children}
  
  <style jsx>{`
    div {
      width: 100vw;
      background-color: #fff;
    }
  `}</style>
  </div>
)

export default Layout