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
    `}</style>
  </div>
)

export default CaseStudiesCard