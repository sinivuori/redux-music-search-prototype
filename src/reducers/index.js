import { combineReducers } from 'redux';
import MusicSearchResults from './reducer_fetch_music';
import ActiveMusic from './reducer_select_music';

const rootReducer = combineReducers({
  musicSearchResults: MusicSearchResults,
  activeMusic: ActiveMusic
});

export default rootReducer;
