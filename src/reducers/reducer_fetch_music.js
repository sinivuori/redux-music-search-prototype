import {FETCH_MUSIC} from '../actions/action_fetch_music';

export default function(state = {}, action) {
  var newState = [];
  switch (action.type) {
    case FETCH_MUSIC:
      newState = action.payload.data;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
