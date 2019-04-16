const ThumbnailSlider = ({ id, thumbnail, title, handleClick}) => (
    <div className='thumbnail-item'>
      <a className='thumbnail-link' onClick={handleClick(id)}>
      <img className='thumbnail-img' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}/>
      <div className='overlay'>
        <p>{title}</p>
      </div>
      </a>
      <style jsx>{`
        .thumbnail-item {
          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: space-between;
          margin-right: 10px;
          padding: 58px 30px 39px;
          position: relative;
          width: 50%;
          cursor: pointer;
        }
        .thumbnail-link {
          position: relative;
        }
        .thumbnail-img {
          width: 100%;
        }
        .overlay {
          transition: .5s ease;
          display: none;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0; 
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgb(41, 8, 43);
          opacity: 0.7;
          z-index: 2; 
          cursor: pointer;
          padding: 10px;
          animation: fadeInFromNone 0.5s ease;
        }
        .overlay p {
          font-family: var(--regular);
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--white);
          z-index: 2;
          opacity: 1;
        }
        .thumbnail-item:hover .overlay {
          display: block;
        }
        @-webkit-keyframes fadeInFromNone {
          0% {
            opacity: 0;
          }
    
          1% {
            opacity: 0.5;
          }
    
          100% {
            opacity: 0.7;
          }
        }
    
        @-moz-keyframes fadeInFromNone {
          0% {
            opacity: 0;
          }
    
          1% {
            opacity: 0.3;
          }
    
          100% {
            opacity: 0.7;
          }
        }
    
        @-o-keyframes fadeInFromNone {
          0% {
            opacity: 0;
          }
    
          1% {
            opacity: 0.3;
          }
    
          100% {
            opacity: 0.7;
          }
        }
    
        @keyframes fadeInFromNone {
          0% {
            opacity: 0;
          }
    
          1% {
            opacity: 0.3;
          }
    
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
     </div>
)

export default ThumbnailSlider
