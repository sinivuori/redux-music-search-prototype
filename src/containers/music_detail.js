import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicDetail extends Component {
  render() {
    if (!this.props.music) {
      return (
        <div className="row"></div>
      );
    }

    return (
      <div className="music-detail">
        <div className="row">
          <audio src={this.props.music.previewUrl} autoPlay controls className="col-md-12">
          </audio>
        </div>
        <div className="alert alert-info courtesy-of-iTunes">
          Music preview is provided courtesy of iTunes
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    music: state.activeMusic
  };
}

export default connect(mapStateToProps)(MusicDetail);
