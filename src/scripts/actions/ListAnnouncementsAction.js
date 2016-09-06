import get from '../helpers/response'

export const FETCH_ANNS = 'FETCH_ANNS';
export const FETCH_ANNS_SUCCESS = 'FETCH_ANNS_SUCCESS';
export const FETCH_ANNS_FAILURE = 'FETCH_ANNS_FAILURE';

export function fetchAnns() {
  const getAnns = get(`?ax=1&ay=1&bx=1400&by=5`);

  return {
    type: FETCH_ANNS,
    payload: getAnns
  };
}

export function fetchAnnsSuccess(saleSystems) {
  return {
    type: FETCH_ANNS_SUCCESS,
    payload: saleSystems
  };
}

export function fetchAnnsFailure(details) {
  return {
    type: FETCH_ANNS_FAILURE,
    payload: details
  };
}
