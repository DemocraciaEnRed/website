import Link from 'next/link'

const JobCard = ( props ) => (
  <div className='job-card'>
    <span className='job-card-category'>{props.category}</span>
    <p className='job-card-title'>{props.job}</p>
    <ul className='job-card-list'>
      <li>{props.seniority}</li>
      <li>{props.type}</li>
      <li>{props.location}</li>
    </ul>
    <div className='button-container'>
      <Link href={props.url}>
        <button className='btn job-card-btn'>
          <span className='action-text job-card-action-text'>
            Aplicar
          </span>
        </button>
      </Link>
    </div>
    <style jsx>{`
      .job-card {
        background-color: #f0f0f0;
        display: flex;
        flex-wrap: wrap;
        height: 268px;
        margin-bottom: 23px;
        padding: 16px;
        width: 313px;
      }
      .job-card-category {
        margin-left: auto;
        color: #565656;
        font-size: 2.0rem;
      }
      .job-card-title {
        color: var(--dark-accent);
        font-weight: 600;
        font-size: 3.4rem;
      }
      .job-card-list li{
        color: var(--gray);
        font-size: 2.4rem;
      }
      .button-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      .job-card-btn {
        height: 31px;
        width: 130px;
      }
      .job-card-action-text {
        font-size: 1.8rem;
      }
      @media (max-width: 353px) {
        .job-card-title {
          font-size: 3.0rem;
        }
      }
    `}</style>
  </div>
)

export default JobCard