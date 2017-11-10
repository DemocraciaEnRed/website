const MediaLink = ( {url, logo}) => (
  <a href ={url} target='_blank' rel='external'>
    <img src={logo} className='media-link-image'/>
    <style jsx>{`
      .media-link-image {
        height: 62px;
      }
    `}</style>
  </a>
)

export default MediaLink