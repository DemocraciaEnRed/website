const MediumPost = (props) => (
  <article className='medium-post'>
    <p className='text-snippet'>{props.snippet}</p>
    <div className='post-data'>
      <span className='timestamp'>{props.timestamp}</span>
      <i className='heart'></i>
      <span className='likes'>{props.likes}</span>
    </div>
  <style jsx>{`

  `}</style>
  </article>
)

export default MediumPost