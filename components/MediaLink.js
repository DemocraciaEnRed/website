const MediaLink = ( {url, logo, className}) => (
  <a href ={url} target='_blank' rel='external' className={`media-link ${className}`}>
    <img src={logo} className='media-link-image' />
    <style jsx>{`
      .media-link-image {
        height: 60px;
      }
      @media screen and (max-width: 1024px) {
        .media-link-image {
          height: 40px;
        }
      }
      @media screen and (max-width: 768px) {
        .media-link-image {
          height: 30px;
        }
      }
      @media screen and (max-width: 600px) {
        .media-link-image {
          height: 30px;
        }
        .wired {
          order: 1;
        }
        .ted {
          order: 2;
        }
        .fast {
          order: 3;
        }
        .elpais {
          order: 4;
        }
        .lanacion {
          order: 5;
          width: 212px;
        }
        .lpo {
          order: 6;
        }
        .bbc {
          order: 7;
          margin: auto;
        }
      }
      @media screen and (max-width: 375px) {
        .bbc {
          margin: 0;
        }
        .lanacion {
          width: auto;
        }
      }
    `}</style>
  </a>
)

export default MediaLink