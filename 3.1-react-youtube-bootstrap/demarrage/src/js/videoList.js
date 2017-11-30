import React from 'react';

class VideoList extends React.Component {
  constructor(){
    super();
    this.state = {
      videos: [
        {
          id: 1,
          title: 'Video 1',
          description: 'description 1',
          file: './uploads/video1.mp4'
        },
        {
          id: 2,
          title: 'Video 2',
          description: 'description 2',
          file: './uploads/video2.mp4'
        }
      ],
    }
  }

  renderVideos() {
		return this.state.videos.map( ( video ) => {
			return (
				<li key={video.id} className="media">
					<div className="media-left">
						<img className="media-object"
							alt="cat" src={'http://lorempixel.com/120/70/cats/?r='+Math.random()}
							width="120"
							height="70" />
					</div>
					<div className="media-body">
						<h4 className="media-heading">{video.title}</h4>
						<p>{video.description}</p>
					</div>
				</li>
			);
		});
	}

  render () {
    return (
      <div className="row marketing">
        <div className="col-lg-12">
          <ul className="media-list">
            { this.renderVideos() }
          </ul>
        </div>
      </div>
    );
  }


}

export default VideoList;
