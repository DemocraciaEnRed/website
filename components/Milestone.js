const Milestone = ( props ) => (
  <div className='milestone-container'>
    <div className='milestone-img'></div>
    <h3 className='subtitle'>{props.title}</h3>
    <h4 className='subtext'>{props.subtitle}</h4>
    {props.button &&
      <button className='btn'>Ver más</button>
    }
    <style jsx>{`
      .milestone-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 290px;
      }
      .milestone-img {
        background-color: var(--light-gray);
        border-radius: 100%;
        height: 173px;
        margin-bottom: 23px;
        width: 173px;
      }
      .milestone-container .subtitle {
        text-transform: uppercase;
      }
      @media (max-width: 1024px) {
        .milestone-container .milestone-img {
          height: 139px;
          width: 139px;
        }
        .milestone-container .subtitle {
          font-size: 1.9rem;
        }
        .milestone-container .subtext {
          font-size: 1.9rem;
        }
      }
      @media (max-width: 500px) {
        .milestone-container {
          width: 100%;
          margin-bottom: 42px;
        }
      }
    `}</style>
  </div>
)

export default Milestone