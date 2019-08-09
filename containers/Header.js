

const Header = ({ title, bg, icon }) => {
 let  titleUpperCased = title.toUpperCase()
return (
  <header>
    <div className='logo-container'><img src={icon} /></div>
    <div className='about-us-title-container'><h1 className='about-us-title'>{titleUpperCased}</h1></div>
    <style jsx>{`
      header {
        // background-image: url(${bg});
        display: flex;
        align-items: center;
        height: 300px;
        padding: 49px 81px 21px;
        width: 100%;
        justify-content: center;
      }
      .logo-container {
        display: flex;
        justify-content: center;
        width: auto;
      }
      .logo-container img {
        width: 100%;
      }
      .about-us-title-container {
        margin-left: 20px;
      }
      .about-us-title {
        font-family: var(--medium)
        font-weight: 150;
        text-align: center;
        color: var(--black);
        font-size: 5.5rem;
        letter-spacing: 4px;
      }
      @media screen and (max-width: 1024px) {
        header {
          height: 349px;
          justify-content: left;
          padding: 21px;
        }
        header h1 {
          font-size: 3.6rem;
        }
      }
    `}</style>
  </header>
)
    }
export default Header