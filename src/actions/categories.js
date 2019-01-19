import { RSAA, ApiError } from 'redux-api-middleware';

export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';

export const getCategory = id => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `https://www.googleapis.com/youtube/v3/videoCategories?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }&part=snippet&id=${id}`,
      method: 'GET',
      types: [GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE],
      fetch: async (...args) => {
        const response = await fetch(...args);
        const json = await response.json();

        if (json.items.length === 0) {
          throw new ApiError(404, `No category found with "${id}" id`);
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
