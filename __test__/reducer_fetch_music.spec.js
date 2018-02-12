import FetchMusicReducer from '../src/reducers/reducer_fetch_music';

describe('Fetch music reducer', () => {
  it('Should have initial state of two songs', () => {
    expect(FetchMusicReducer(undefined, {}).results.length).toEqual(2);
  });
});
