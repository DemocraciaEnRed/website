export default ({ video }) => (
  <div className='main-video'>
    <iframe frameBorder='0' src={`https://youtube.com/embed/${video}`} />
    <style jsx>{`
      .main-video {
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      .main-video iframe,
      .main-video object,
      .main-video embed {
        width: 800px;
        height: 600px;
        margin: 40px 0;
      }
    `}</style>
    </div>
)
