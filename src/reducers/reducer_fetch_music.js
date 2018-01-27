import {FETCH_MUSIC} from '../actions/action_fetch_music';

var initialMusic = {
  results: [
    {
      collectionName: "Divine Land of China",
      artistName: "Tony Chen",
      trackName: "Hope",
      previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/83/ae/92/mzm.wmyobrlk.aac.p.m4a",
      artworkUrl100: "http://is4.mzstatic.com/image/thumb/Music/v4/60/e3/89/60e389cc-9dd2-3ff6-d924-a10688fd8c57/source/100x100bb.jpg",
      trackViewUrl: "https://itunes.apple.com/us/album/hope/411543012?i=411543081&uo=4",
      trackId: 411543081,
      artistViewUrl: "https://itunes.apple.com/us/artist/tony-chen/377092325?uo=4"
    },
    {
      collectionName: "Music for My Little Friends",
      artistName: "James Galway & Phillip Moll",
      trackName: "Lament for the Wild Geese",
      previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/f8/6f/67/mzm.ceohsdlt.aac.p.m4a",
      artworkUrl100: "http://is2.mzstatic.com/image/thumb/Music/v4/fd/4e/17/fd4e175f-3f28-cb48-75b7-792cb0bc74f7/source/100x100bb.jpg",
      trackViewUrl: "https://itunes.apple.com/us/album/lament-for-the-wild-geese/358292520?i=358293431&uo=4",
      trackId: 358293431,
      artistViewUrl: "https://itunes.apple.com/us/artist/james-galway/219103?uo=4"
    }
  ]
}

export default function(state = initialMusic, action) {
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
