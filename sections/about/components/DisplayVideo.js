const DisplayVideo = ({ video }) => (
  <div className='main-video'>
    <iframe frameBorder="0" width="560" height="315" src={`https://youtube.com/embed/${video}`} ></iframe>
    <style jsx>{`
      .main-video {
        display: flex;
        justify-content: center;
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
      }
      .main-video iframe,
      .main-video object,
      .main-video embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
    </div>
)

export default DisplayVideo