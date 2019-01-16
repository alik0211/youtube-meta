import {
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE
} from '../actions/videos';

const initialState = {
  collection: {},
  currentVideo: null,
  isFetched: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_REQUEST:
      return {
        ...state,
        isFetched: true
      };

    case GET_VIDEO_SUCCESS:
      const video = action.payload;

      return {
        ...state,
        collection: {
          ...state.collection,
          [video.id]: video
        },
        currentVideo: video.id,
        isFetched: false
      };

    case GET_VIDEO_FAILURE:
      return {
        ...state,
        isFetched: false
      };

    default:
      return state;
  }
}
