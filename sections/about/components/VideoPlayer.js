import React, {Component} from 'react';


export default class extends React.Component{

constructor(props){
  super(props)
  this.playlistId = 'PL-5jaKJlVw83pDzsOkK079BTOzrZ-VfNT'
  this.part = 'contentDetails'
  this.state = {
  currentVideo : 'FJS0zWIQJo0',
  currentTitle : 'hola',
  videos: []
  };
}

  
handleClick = (video) => () => {
  this.setState({
    currentVideo : video.id,
    currentTitle: video.title
  })
  }

  
  componentDidMount (){
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${this.props.api}&playlistId=${this.playlistId}&part=snippet`)
    .then((response) => response.json())
    .then((responseJson) => {
    return responseJson.items.map(obj => ({ 
      title: obj.snippet.title,
      thumbnail: obj.snippet.thumbnails.standard.url,
      id: obj.resourceId.videoId
    })
  );
    })
  .then((videos) =>   
    this.setState({videos: videos},() => console.log(this.state.videos))
  )  
    .catch((error) => {
    console.error(error);
    });

    }

    render(){
      
      return(
        <div>
          <h3> {this.state.currentTitle} </h3>
          <div className='youtube'>
          <iframe width='900' height='600' src={ "https://youtube.com/embed/" +  this.state.currentVideo} ></iframe>

          {
            this.state.videos.map((video,i) => 
              ( 
              <div key={i} className='thumbnail'>
                 <button onClick={this.handleClick(video)}> 
                <img src={"https://img.youtube.com/vi/" + video.id + "/mqdefault.jpg"}/>
                </button> 
              </div>
            )
          )
          }
          {this.frame}
            </div>
            <style jsx>{`
    h3{
      font-size:2em;
      padding:30px;
    }
    .youtube{
      width: 900px;
      height: auto;
    }
    .iframe {
      width:900px;
      height:auto;
    } 
    `}</style>
        </div>
      )
    }
  }
