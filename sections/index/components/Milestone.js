import Link from 'next/link'

const Milestone = ( props ) => (
  <div className='milestone-container'>
    <img className='milestone-img' src={props.icon}/>
    <h3 className='subtitle'>{props.title}</h3>
    <h4 className='subtext'>{props.subtitle}</h4>
    {props.button && props.href &&
      <Link href={props.href} >
        <a target="_blank" >
          <button  className='btn' onClick={props.handleClick}>
            <span className='action-text'>
              {props.button}
            </span>
          </button>
        </a>
      </Link>
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
        .milestone-container {
          margin-bottom: 40px;
        }
        .milestone-container .milestone-img {
          height: 140px;
          width: 140px;
          margin-bottom: 0;
        }
        .milestone-container .subtitle {
          font-size: 1.9rem;
          margin: 42px 0 5.5px;
        }
        .milestone-container .subtext {
          width: 80%;
          font-size: 1.9rem;
        }
      }
      #collaborate div div div a button {
        margin-top:76px !important;
      }
      @media (max-width: 500px) {
        .milestone-container {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export default Milestone