import React from 'react';

const MusicItem = ({music}) => {
  return (
    <div className="row music-item">
      <div className="col-md-2">
        <img src={music.artworkUrl100} alt={music.trackName} className="rounded" />
      </div>
      <div className="col-md-3">
        <div className="music-info-text">
          <strong>{music.trackName}</strong>
        </div>
        <div className="music-info-text">
          <p><strong>By:</strong> {music.artistName}</p>
        </div>
      </div>
      <div className="col-md-5">
        <audio controls>
          <source src={music.previewUrl}/>
        </audio>
      </div>
      <div className="col-md-2">
        <div className="music-info-text">
          <strong>Preview of this song is provided courtesy of iTunes</strong>
        </div>
        <div className="music-info-text">
          <a href={music.trackViewUrl}>Purchase at iTunes Store <i className="fab fa-itunes"></i></a>
        </div>
      </div>
    </div>
  );
};

export default MusicItem;
