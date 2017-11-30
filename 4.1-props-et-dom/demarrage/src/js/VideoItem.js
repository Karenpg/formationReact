import React from "react";
import PropTypes from 'prop-types';

const VideoItem = props => (
  <li className="media">
    <div className="media-left">
      <img className="media-object"
        alt="cat" src={'http://lorempixel.com/120/70/cats/?r='+Math.random()}
        width="120"
        height="70" />
    </div>
    <div className="media-body">
      <h4 className="media-heading">{props.video.title}</h4>
      <p>{props.video.description}</p>
    </div>
  </li>
);

VideoItem.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.string
  }).isRequired,
}
export default VideoItem;
