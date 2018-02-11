import {SELECT_MUSIC} from '../actions/action_select_music';
import {FETCH_MUSIC} from '../actions/action_fetch_music';

export default function(state = null, action) {
  var newState = {};
  switch (action.type) {
    case SELECT_MUSIC:
      newState = action.payload;
      break;
    case FETCH_MUSIC:
      newState = null;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
