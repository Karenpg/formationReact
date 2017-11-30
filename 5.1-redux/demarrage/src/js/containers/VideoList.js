import React from 'react';
import request from 'superagent';
import config from 'config';
import VideoItem from '../components/VideoItem';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
	return { videos: state.videos }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {fetchVideos}, dispatch);
}

class VideoList extends React.Component {

	componentWillMount(){
		this.props.fetchVideos();
		// request
		// 	.get( `${config.apiPath}/videos` )
		// 	.then(
		// 		( response ) => {
		// 			this.setState( { videos: response.body } );
		// 		}
		// 	)
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
	renderVideos() {
		return this.props.videos.map( ( video ) => {
			return (
				<VideoItem key={video.id} video={video} />
			);
		});
	}
}

export default connect(mapStateToProps, mapDispatchToProps)( VideoList );
