const CaseStudiesCard = (props) => (
  <div className='case-studies-card'>
    <img className='case-studies-card-img' src=''/>
    <div className='case-studies-card-body'>
      <h3 className='subtext'>{props.title}</h3>
      <p className='card-label'>{props.subtitle}</p>
    </div>
    <style jsx>{`
      .case-studies-card {
        background: var(--white);
        display: flex;
        flex-direction: column;
        height: 306px;
        margin: 46px 0 50px;
        width: 272px;
      }
      .case-studies-card-img {
        background-color: #bebebe;
        height: 142px;
        width: 100%;
      }
      .case-studies-card-body {
        padding: 12px 22px 29px;
      }
      .case-studies-card-body .subtext {
        max-height: 72px;
      }
      .case-studies-card-body .card-label {
        margin-top: 15px;
      }
      @media (max-width: 1024px) {
        .case-studies-card {
          height: 270px;
          width: 240px;
        }
        .case-studies-card-img {
          height: 125px;
          width: 100%;
        }
        .case-studies-card-body {
          padding: 10px 20px 27px;
        }
        .case-studies-card-body .subtext {
          font-size: 2.1rem;
          line-height: 1.5;
          max-height: 63px;
        }
        .case-studies-card-body .card-label {
          font-size: 1.4rem;
        }
      }
    `}</style>
  </div>
)

export default CaseStudiesCard