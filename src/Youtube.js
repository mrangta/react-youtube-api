import React, { Component } from 'react';

const API = 'AIzaSyARoo188d2hv6eA2NxrlC2Y2QR--XxV1QM';
const channelID ='UC8butISFwT-Wl7EV0hUK0BQ'
const result = 10;
var  finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {
  constructor(props){
    super(props);

    this.state = {
      resultyt:[]
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}

  render(){
    return(
      <div>
        <button onClick={this.clicked}>Fetch Youtube Videos</button>
        {
          this.state.resultyt.map((link,i)=>{
            var frame = <div key={i} className="youtube"><iframe title=" Complete React Js course" width="760" height="515" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><hr/></div>

            return frame;
          })
        }
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
