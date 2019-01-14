import {
  SET_VIDEO,
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
    case SET_VIDEO:
      return {
        ...state,
        currentVideo: action.payload.id
      };

    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action.payload.items.reduce((accumulator, item) => {
            return {
              ...accumulator,
              [item.id]: item
            };
          }, {})
        }
      };

    default:
      return state;
  }
}
