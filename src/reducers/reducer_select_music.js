import {SELECT_MUSIC} from '../actions/action_select_music';

export default function(state = null, action) {
  var newState = {};
  switch (action.type) {
    case SELECT_MUSIC:
      newState = action.payload;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
