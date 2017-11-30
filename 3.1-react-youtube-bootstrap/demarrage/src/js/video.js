// import React from 'react';
import React, {Component} from 'react';

class Video extends Component {
  constructor(){
    super();
    this.state = {
      video: {
        id: 1,
        title: 'Video 1',
        description: 'description 1',
        file: 'video1.mp4'
      }
    };
  }

  render() {
    let style = {
      width: '100%',
      backgroundColor:'black'
    };

    return (
      <div className="row marketing">
          <div className="col-sm-12 col-md-12">
              <div className="thumbnail">
                  <div className="caption">
                      <video
                          style={style}
                          height="300"
                          controls
                          // src={this.state.file}
                          src={this.state.video && './uploads/' + this.state.video.file}
                      >
                      </video>
                      <h3>{this.state.video && this.state.video.title} </h3>
                      <p>{this.state.video && this.state.video.description}</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Video;
