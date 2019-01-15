import {
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE
} from '../actions/videos';

const initialState = {
  collection: {},
  currentVideo: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_SUCCESS:
      const video = action.payload;

      return {
        ...state,
        collection: {
          ...state.collection,
          [video.id]: video
        },
        currentVideo: video.id
      };

    case GET_VIDEO_FAILURE:
    default:
      return state;
  }
}
