import React from 'react';
import request from 'superagent';
import config from 'config';
import { connect } from 'react-redux';
import { fetchComments, fetchVideoToPlay} from '../actions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
	return {
		video: state.video,
		comments: state.comments
	 }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		fetchVideoToPlay,
		fetchComments}, dispatch);
}

class Video extends React.Component {

	constructor() {
		super();
		this.id = 2;

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleCommentInputChange = this.handleCommentInputChange.bind( this );
	}

	componentWillMount(){
		this.props.fetchVideoToPlay(2);
		// request
		// 	.get( `${config.apiPath}/videos/${this.id}` )
		// 	.then(
		// 		( response ) => {
		// 			this.setState( { video: response.body } );
		// 		}
		// 	);
		this.props.fetchComments(2);
	}

	// fetchComments(){
	// 	request
	// 		.get( `${config.apiPath}/videos/${this.id}/comments` )
	// 		.then(
	// 			( response ) => {
	// 				this.setState( { comments: response.body } );
	// 			}
	// 		)
	// }

	componentDidUpdate(prevProps, prevState){
		if (this.props.video && (!prevState.video || prevState.video.id != this.props.video.id ) ) {
			this.playVideo();
		}
	}

	playVideo() {
		if ( this.video ) {
			this.video.play();
		}
	}

	render() {
		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="thumbnail">
						<div className="caption">
							<video
								style={{ width: '100%', backgroundColor: 'black' }}
								ref={el => this.video = el}
								height="300"
								controls
								src={this.props.video && './uploads/' + this.props.video.file}
							>
							</video>
							<h3>{this.props.video ? this.props.video.title : 'Chargement en cours'}</h3>
							<p>{this.props.video && this.props.video.description}</p>
						</div>
						<form onSubmit={this.handleSubmit}>
						  <div className="form-group">
							<label htmlFor="content">Ajouter un commentaire</label>
							<textarea
								ref={el => this.commentInput = el}
								className="form-control"
								value={this.state.newComment}
								onChange={this.handleCommentInputChange}
								name="content"
								id="content"
								cols="30"
								rows="2"
								disabled={this.state.newCommentLoading}
							/>
						  </div>
						  <button type="submit" className="btn btn-default" disabled={this.state.newCommentLoading}>
							{!this.state.newCommentLoading ? 'Envoyer' : 'Envoi en cours...'}
						  </button>
						</form>
						<div>
							<h4>Commentaires: </h4>
							{ this.renderComments() }
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderComments(){
		return this.state.comments.map(( comment ) => {
			return (
				<div key={comment.id} className="panel panel-default">
				  <div className="panel-body">
					<h6><small>Le {(new Date(comment.created_at)).toLocaleString()}</small></h6>
					{comment.content}
				  </div>
				</div>
			);
		});
	}

	handleCommentInputChange( event ) {
		this.setState({newComment : this.commentInput.value});
	}

	handleSubmit( event ) {
		event.preventDefault();
		this.setState({newCommentLoading: true});
		request
			.post( `${config.apiPath}/videos/${this.state.video.id}/comments` )
			.send( 'content=' + encodeURIComponent( this.commentInput.value ) )
			.then(
				( response ) => {
					this.setState({newCommentLoading: false, newComment: ''});
					this.fetchComments();
				}
			);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)( Video);
