const ThumbnailSlider = (props) => (
  <div className='thumbnail-item'>
    <button className='' 
  //  onClick={this.handleClick(video)}
    > 
      <img src={"https://img.youtube.com/vi/" + 'FJS0zWIQJo0' + "/mqdefault.jpg"}/>
    </button> 
       
    <style jsx>{`

    .thumbnail-item {
      display: flex;
      flex-direction: column;
      height: 305px;
      justify-content: space-between;
      margin-right: 72px;
      padding: 58px 30px 39px;
      position: relative;
      width: 371px;
    }
    
    `}</style>

  </div>

)

export default ThumbnailSlider
