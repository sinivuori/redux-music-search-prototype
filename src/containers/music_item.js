import React from 'react';

const MusicItem = ({music}) => {
  return (
    <div className="row music-item">
      <div className="col-md-2">
        <img src={music.artworkUrl100} alt=""/>
      </div>
      <div className="col-md-2">
        <strong>Name:</strong> {music.trackName}
      </div>
      <div className="col-md-2">
        <strong>Artist:</strong> {music.artistName}
      </div>
      <div className="col-md-3">
        <audio controls>
          <source src={music.previewUrl}/>
        </audio>
      </div>
      <div className="col-md-2">
        <div className="row">
          <strong>Preview of song is provided courtesy of iTunes <i className="far fa-heart"></i> <i className="fab fa-itunes"></i></strong>
        </div>
        <div className="row">
          <a href={music.trackViewUrl}>Purchase at iTunes Store</a>
        </div>
      </div>
    </div>
  );
};

export default MusicItem;
