import { VIDEO_LIST_COMPLETE, VIDEO_TO_PLAY } from "../actions";

const defaultState = {
  videos: [],
  video: null,
  comments: [],
  newComment: '',
  newCommentLoading: false,
  isLoading: false,
}

export default function (state = defaultState, action) {
  if (action.type == VIDEO_LIST_COMPLETE){
    return {
      ...state,
      videos: action.videos
    };
  }
  if (action.type == VIDEO_TO_PLAY){
    return {
      ...state,
      video: action.video
    };
  }
  return state;
}
