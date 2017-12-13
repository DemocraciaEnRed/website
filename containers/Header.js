const Header = ( { title, bg }) => (
  <header>
    <h1 className='about-us-title'>{title}</h1>
    <style jsx>{`
      header {
        background-image: url(${bg});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        height: 475px;
        padding: 49px 81px 21px;
        width: 100%;
      }
      .about-us-title {
        color: var(--white);
        font-size: 4.2rem;
      }
      @media screen and (max-width: 1024px) {
        header {
          height: 400px;
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

export default Header