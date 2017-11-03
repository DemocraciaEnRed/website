import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Navbar />
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