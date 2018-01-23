import React, {Component} from 'react';
import {connect} from 'react-redux';
import MusicItem from './music_item';

class MusicList extends Component {
  render() {
    var musicList = [];

    if (this.props.musicSearchResults && this.props.musicSearchResults.results) {
      musicList = this.props.musicSearchResults.results.map((musicItem) => {
        return (
          <MusicItem
            key={musicItem.trackId}
            music={musicItem} />
          );
      });
    }

    return (
      <div className="container-fluid music-items-container">
        {musicList}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    musicSearchResults: state.musicSearchResults
  };
}

export default connect(mapStateToProps)(MusicList);
