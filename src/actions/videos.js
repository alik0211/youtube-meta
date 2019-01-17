import { RSAA, ApiError } from 'redux-api-middleware';

export const GET_VIDEO_REQUEST = 'GET_VIDEO_REQUEST';
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEO_FAILURE = 'GET_VIDEO_FAILURE';

export const getVideo = id => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `https://www.googleapis.com/youtube/v3/videos?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }&part=snippet&id=${id}`,
      method: 'GET',
      types: [GET_VIDEO_REQUEST, GET_VIDEO_SUCCESS, GET_VIDEO_FAILURE],
      fetch: async (...args) => {
        const response = await fetch(...args);
        const json = await response.json();

        if (json.items.length === 0) {
          throw new ApiError(404, `No video found with "${id}" id`);
        }

        return new Response(JSON.stringify(json.items[0]), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    }
  });
};
