export default ({ video }) => (
  <div className='main-video'>
    <iframe frameBorder='0' src={`https://youtube.com/embed/${video}`} />
    <style jsx>{`
      .main-video {
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 100%    !important;
        height: auto   !important;
      }
      .main-video iframe,
      .main-video object,
      .main-video embed {
        width: 800px;
        height: 451px;
        margin: 0px 0;
      }

      @media (max-width: 768px) {
        .main-video iframe,
      .main-video object,
      .main-video embed {
        width: 560px;
        height: 315px;
        margin: 0px 0;
      }
      }
      @media (max-width: 450px) {
        .main-video iframe,
      .main-video object,
      .main-video embed {
        width: 400px;
        height: 220px;
        margin: 0px 0;
      }
      }
    `}</style>
    </div>
)
