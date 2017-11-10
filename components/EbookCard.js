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
        margin-bottom: 22px;
        width: 200px;
      }
      .action-text {
        font-size: 2.1rem;
      }
    `}</style>
  </div>

)

export default EbookCard