import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE
} from '../actions/categories';

const initialState = {
  collection: {},
  isFetched: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        isFetched: true
      };

    case GET_CATEGORY_SUCCESS:
      const category = action.payload;

      return {
        ...state,
        collection: {
          ...state.collection,
          [category.id]: category
        },
        isFetched: false
      };

    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        isFetched: false
      };

    default:
      return state;
  }
}
