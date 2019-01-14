import { RSAA } from 'redux-api-middleware';

export const SET_VIDEO = 'SET_VIDEO';
export const GET_VIDEO_REQUEST = 'GET_VIDEO_REQUEST';
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEO_FAILURE = 'GET_VIDEO_FAILURE';

export const setVideo = id => ({
  type: SET_VIDEO,
  payload: {
    id
  }
});

export const getVideo = id => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `https://www.googleapis.com/youtube/v3/videos?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }&part=snippet&id=${id}`,
      method: 'GET',
      types: [GET_VIDEO_REQUEST, GET_VIDEO_SUCCESS, GET_VIDEO_FAILURE]
    }
  }).then(() => {
    return dispatch(setVideo(id));
  });
};
