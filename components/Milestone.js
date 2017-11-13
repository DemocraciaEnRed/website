const Milestone = ( props ) => (
  <div className='milestone-container'>
    <div className='milestone-img'></div>
    <h3 className='subtitle'>{props.title}</h3>
    <h4 className='subtext'>{props.subtitle}</h4>
    {props.button &&
      <button className='btn'>
        <span className='action-text'>
          {props.button}
        </span>
      </button>
    }
    <style jsx>{`
      .milestone-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: ${props.containerWidth};
      }
      .milestone-img {
        background-color: var(--gray);
        border-radius: 100%;
        height: 173px;
        margin-bottom: 26px;
        width: 173px;
      }
      .milestone-container .subtitle {
        text-transform: uppercase;
        margin-top: 7px;
      }
      .milestone-container .btn {
        margin-top: 42px;
      }
      @media (max-width: 1024px) {
        .milestone-container .milestone-img {
          height: 140px;
          width: 140px;
          margin-bottom: 0;
        }
        .milestone-container .subtitle {
          font-size: 1.9rem;
          margin: 21px 0 5.5px;
        }
        .milestone-container .subtext {
          width: 80%;
          font-size: 1.9rem;
        }
      }
      @media (max-width: 500px) {
        .milestone-container {
          width: 100%;
          margin-top: 42px;
        }
      }
    `}</style>
  </div>
)

export default Milestone