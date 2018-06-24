export const GET_CAT = 'GET_CAT';
export const GET_CAT_SUCCESS = 'GET_CAT_SUCCESS';
export const GET_CAT_FAILURE = 'GET_CAT_FAILURE';

export function getCat() {
  return {
    type: GET_CAT,
  };
}

export function getCatSuccess({ cats }) {
  return {
    type: GET_CAT_SUCCESS,
    cats,
  };
}

export function getCatFailure({ error }) {
  return {
    type: GET_CAT_FAILURE,
    error,
  };
}
