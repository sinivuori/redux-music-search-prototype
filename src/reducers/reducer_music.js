import {FETCH_MUSIC} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MUSIC:
      return [action.payload.data.results];
    default:
      return state;
  }
  return state;
}
