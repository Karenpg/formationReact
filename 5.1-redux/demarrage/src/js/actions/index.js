import request from 'superagent';
//Un const pour chaque action a lancer
export const VIDEO_LIST_COMPLETE = 'VIDEO_LIST_COMPLETE';
export const VIDEO_LIST_LOADING = 'VIDEO_LIST_LOADING';
export const VIDEO_TO_PLAY ='VIDEO_TO_PLAY';
export const VIDEO_TO_ADD = 'VIDEO_TO_ADD';
export const COMMENT_TO_SHOW = 'COMMENT_TO_SHOW';
export const COMMENTS_LIST_COMPLETE = 'COMMENTS_LIST_COMPLETE';
export const COMMENTS_LIST_LOADING = 'COMMENTS_LIST_LOADING';
export const COMMENT_TO_ADD = 'COMMENT_TO_ADD';

export function fetchVideos() {
 return function (dispatch, getState) {
  request
    .get(`${config.apiPath}/videos` )
    .end ( (err, res ) => {
      if (!err && res.ok ) {
        dispatch( { type: VIDEO_LIST_COMPLETE, videos: res.body } )
      }
      else{

      }
    });
 }
}

export function fetchVideoToPlay(id) {
 return function (dispatch, getState) {
  dispatch( { type: VIDEO_TO_PLAY, id } )
  request
    .get(`${config.apiPath}/videos/${id}`)
    .end ( (err, res ) => {
      if (!err && res.ok ) {
        dispatch( { type: VIDEO_TO_PLAY, video: res.body } )
      }
      else{

      }
    });
 }
}

export function fetchComments(id) {
  return function (dispatch, getState) {
    dispatch( { type: COMMENT_TO_SHOW, id } )
    request
      .get( `${config.apiPath}/videos/` + id `/comments` )
      .end( (err, res ) => {
        if (!err && res.ok ){
          dispatch( {type: COMMENT_TO_SHOW, comments: res.body})
        }
      });
    }
  }
