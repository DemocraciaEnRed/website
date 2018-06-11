const ThumbnailSlider = ({ id, thumbnail, title, handleClick}) => (
    <div className='thumbnail-item'>
      <a onClick={handleClick(id)}>
      <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}/>
      </a>
      <style jsx>{`
        .thumbnail-item {
          display: flex;
          flex-direction: column;
          height: 305px;
          justify-content: space-between;
          margin-right: 10px;
          padding: 58px 30px 39px;
          position: relative;
          width: 371px;
        }
      `}</style>
     </div>
)

export default ThumbnailSlider
