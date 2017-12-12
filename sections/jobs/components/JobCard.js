import Link from 'next/link'

const JobCard = ( props ) => (
  <div className='job-card'>
    <span className='job-card-category'>{props.category}</span>
    <h5 className='job-card-title'>{props.job}</h5>
    <ul className='job-card-list'>
      <li>{props.seniority}</li>
      <li>{props.type}</li>
      <li>{props.location}</li>
    </ul>
    <Link href={props.url}>
      <button className='btn job-card-btn'>
        <span className='action-text job-card-action-text'>
          Aplicar
        </span>
      </button>
    </Link>
    <style jsx>{`
      .job-card {
        align-items: flex-start;
        background-color: #f0f0f0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: 268px;
        justify-content: space-between;
        margin-bottom: 23px;
        padding: 16px;
        width: 313px;
      }
      .job-card-category {
        align-self: flex-end;
        color: #565656;
        font-size: 2.0rem;
      }
      .job-card-title {
        color: var(--dark-accent);
        font-size: 3.4rem;
      }
      .job-card-list li{
        color: var(--gray);
        font-size: 2.4rem;
      }
      .job-card-btn {
        align-self: flex-end;
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