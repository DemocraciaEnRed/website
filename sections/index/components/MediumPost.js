import Link from 'next/link'

const MediumPost = (props) => (
  <a href={props.url} rel='author' target='_blank'>
    <article className='medium-post'>
      <div className='post-overlay'>
      </div>
      <div className='post-snippet'>
        <p className='regular-text snippet-text'>{props.snippet}</p>
      </div>
      <div className='post-data'>
        <span className='timestamp'>{props.timestamp}</span>
        <span className='likes'><img className='heart' src='/static/assets/heart.svg' />{props.likes}</span>
      </div>
    </article>
  <style jsx>{`
    .medium-post {
      background-image: url(${props.img});
      background-size: contain;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 305px;
      justify-content: space-between;
      margin-right: 72px;
      padding: 58px 30px 39px;
      position: relative;
      width: 371px;
    }
    .post-overlay {
      background-color: rgba(0,0,0,0.8);
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 0;
    }
    .post-snippet, .post-data {
      z-index: 1;
    }
    .snippet-text {
      font-family: var(--regular);
      font-size: 2.4rem;
    }

    .post-data {
      margin-top: 19px;
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

    .likes {
      display: inline-flex;
      align-items: center;
    }

    .likes .heart {
      width: 21px;
      height: 20px;
      margin-right: 15px;
    }
    @media (max-width: 1360px) {
      .medium-post {
        margin-right: 10px;
      }
    }
    @media (max-width: 1300px) {
      .medium-post {
        height: 229px;
        padding: 43px 22px 28px;
        width: 279px;
      }
      .snippet-text {
        font-size: 1.8rem;
        line-height: 1.33;
      }
      .post-data span {
        font-size: 1.5rem;
      }
      .likes .heart {
        width: 16px;
        height: 15px;
      }
    }
    @media (max-width: 1024px) and (min-width: 911px) {
      .medium-post {
        margin-right: 50px;
      }
    }
  `}</style>
  </a>
)

export default MediumPost