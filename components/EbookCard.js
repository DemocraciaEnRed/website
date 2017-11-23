const EbookCard = ( {img, title, description, link}) => (
  <div className='ebook-card'>
    <img className='ebook-img' src={img} />
    <h3 className='subtitle ebook-title'>{title}</h3>
    <p className='subtext ebook-description'>{description}</p>
    <button className='btn ebook-btn'>
      <span className='action-text'>Descargar</span>
    </button>
    <style jsx>{`
      .ebook-card {
        display: grid;
        grid-column-gap: 45px;
        grid-template-columns: 205px 227px;
        grid-template-rows: 31px auto 59px;
        grid-template-areas: 
          "sidebar header"
          "sidebar main"
          "sidebar footer";
        height: 280px;
        margin-right: 137px;
      }
      .ebook-img {
        background-color: var(--gray);
        grid-area: sidebar;
      }
      .ebook-title {
        grid-area: header;
      }
      .ebook-description {
        grid-area: main;
        margin-top: 37px;
      }
      .ebook-btn {
        grid-area: footer;
        height: 37px;
        width: 200px;
      }
      .ebook.btn:active {
        border-bottom: 0.005rem solid var(--dark-accent);
        margin-top: 0.3rem;
      }
      .action-text {
        font-size: 2.1rem;
      }
      @media screen and (max-width: 1024px) {
        .ebook-card {
          grid-column-gap: 28px;
          grid-template-columns: 129px 146px;
          grid-template-rows: 20px auto 39px;
          height: 176px;
          margin-right: 24px;
        }
        .ebook-title {
          font-size: 1.5rem;
        }
        .ebook-description {
          font-size: 1.5rem;
          margin-top: 22px;
        }
        .ebook-btn {
          height: 27px;
          margin-bottom: 12px;
          width: 146px;
        }
        .action-text {
        font-size: 1.4rem;
        }
      }
      @media screen and (max-width: 500px) {
        .ebook-card:nth-child(even) {
          margin-top: 5px;
        }
      }
    `}</style>
  </div>

)

export default EbookCard