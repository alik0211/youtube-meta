import { INIT_APP } from '../actions/app'

const initialState = {
  initialized: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
}
