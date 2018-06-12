const SectionMilestone = ( {title, text, icon} ) => (
  <section className='section-milestone'>
    <img className='section-milestone-img' src={icon} />
    <h1 className='section-milestone-title'>{title}</h1>
    <p className='section-milestone-text'>{text}</p>
    <style jsx>{`
      .section-milestone {
        align-items: center;
        align-content: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 600px;
        justify-content: center;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .section-milestone-img {
        height: 100px;
        width: 100px;
      }
      .section-milestone-title {
        font-size: 3.6rem;
        font-weight: var(--bold);
        margin: 16px 0;
        text-align: center;
        text-transform: uppercase;
      }
      .section-milestone-text {
        font-size: 2.4rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      @media (max-width: 1024px) {
        .section-milestone {
          height: 400px;
        }
        .section-milestone-title {
          font-size: 3rem;
        }
      }
    `}</style>
  </section>
)

export default SectionMilestone