import { combineReducers } from 'redux';
import MusicReducer from './reducer_music';

const rootReducer = combineReducers({
  musicSearchResults: MusicReducer
});

export default rootReducer;
