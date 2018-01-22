import { combineReducers } from 'redux';
import MusicReducer from './reducer_music';

const rootReducer = combineReducers({
  music: MusicReducer
});

export default rootReducer;
