export const SELECT_MUSIC = 'SELECT_MUSIC';

export function selectMusic(music) {
  return {
    type: SELECT_MUSIC,
    payload: music
  };
}
