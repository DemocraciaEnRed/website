const DisplayVideo = ({ video }) => (
  <div className='main-video'>
    <iframe frameBorder="0" width="560" height="315" src={`https://youtube.com/embed/${video}`} ></iframe>
    <style jsx>{`
      .main-video {
        display: flex;
        justify-content: center;
      }
    `}</style>
    </div>
)

export default DisplayVideo