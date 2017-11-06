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
        width: 173px;
      }
      .milestone-container .subtitle {
        text-transform: uppercase;
      }
    `}</style>
  </div>
)

export default Milestone