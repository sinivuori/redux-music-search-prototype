import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com/search?media=music&limit=25';

export const FETCH_MUSIC = 'FETCH_MUSIC';

export function fetchMusic(term) {
  const musicSearchUrl = `${BASE_URL}&term=${term}`;
  const searchResult = axios.get(musicSearchUrl);

  return {
    type: FETCH_MUSIC,
    payload: searchResult
  };
}
