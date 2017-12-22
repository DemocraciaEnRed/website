import { t } from '../../../polyglot-modules/polyglot.js'
import JobCard from '../components/JobCard'
import ClosedSearch from '../components/ClosedSearch'
import jobs from '../../../jobs/jobs.json'

const JobGrid = () => (
  <section className='jobs-section'>
    <div className='jobs-header'>
      <h2 className='section-title'>{t('jobs.workWithUs')}</h2>
      <p className='regular-text'>{t('jobs.copy')}</p>
    </div>
    <div className='jobs-container'>
      { //if json is empty, render ClosedSearch. Otherwise render JobCard
        jobs.length === 0 ? ( <ClosedSearch />) 
        : jobs.map((j, i)=> (
           <JobCard 
            key={i}
            job={j.job}
            category={j.category}
            seniority={j.seniority}
            type={j.type}
            location={j.location}
            url={j.url}
            />
        ))
      } 
    </div>
    <style jsx>{`
      .jobs-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 83px 60px 92px;
      }
      .jobs-header {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .section-title {
        font-size: 3.6rem;
        text-transform: uppercase;
        text-align: center;
      }
      .regular-text {
        color: var(--black);
        font-size: 2.4rem;
        text-align: center;
      }
      .jobs-container {
        align-items: space-between;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 83px;
        width: 100%;
      }
      @media screen and (min-width: 2000px){
        .jobs-section {
          padding-left: 300px;
          padding-right: 300px;
        }
      }
      @media (max-width: 1024px) {
        .jobs-section {
          padding: 24px 24px 48px;
        }
        .regular-text {
          font-size: 2.2rem;
        }
        .section-title {
          font-size: 3.0rem;
        }
      }
      @media (max-width: 666px) {
        .jobs-container {
          justify-content: center;
        }
      }
    `}</style>
  </section>
)

export default JobGrid