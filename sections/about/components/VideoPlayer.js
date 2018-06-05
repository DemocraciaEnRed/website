import React, {Component} from 'react';

const { YOUTUBE_API_KEY } = 'undefined' !== typeof window ? window.env : process.env


export default class extends React.Component{

constructor(props){
  super(props)
  this.playlistId = 'PL-5jaKJlVw83pDzsOkK079BTOzrZ-VfNT'
  this.part = 'contentDetails'

  this.clicked = this.clicked.bind(this);
}
  clicked (){
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${this.playlistId}&part=${this.part}`)
    .then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson);
    //const resultyt = responseJson.items.map(obj => obj)
    })
    .catch((error) => {
    console.error(error);
    });
    }

    render(){
      console.log(process.env.YOUTUBE_API_KEY)
      return(
        <div>
          <button onClick={this.clicked}> click</button>
        </div>
      )
    }
  }