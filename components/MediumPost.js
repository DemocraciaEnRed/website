const MediumPost = (props) => (
  <article className='medium-post'>
    <div className='post-snippet'>
      <p className='regular-text snippet-text'>{props.snippet}</p>
    </div>
    <div className='post-data'>
      <span className='timestamp'>{props.timestamp}</span>
      <span className='likes'><img className='heart' src='/static/assets/heart.svg' />{props.likes}</span>
    </div>
  <style jsx>{`
    .medium-post {
      margin-right: 72px;
      width: 371px;
      height: 305px;
      padding: 38px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgba(0,0,0,0.82);
    }

    .post-snippet {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }

    .snippet-text {
      font-size: 2.4rem;
    }

    .post-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: none;
    }

    .post-data span {
      font-family: var(--regular);
      font-size: 2rem;
      text-transform: uppercase;
      color: var(--white);
    }

    .likes .heart {
      width: 21px;
      height: 20px;
      margin-right: 15px;
    }
  `}</style>
  </article>
)

export default MediumPost