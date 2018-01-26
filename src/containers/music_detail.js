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
          <div className="row">
            <div className="col-md-12">
              <strong>Music preview is provided courtesy of iTunes</strong>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-12">
              <strong>Now playing: </strong>{this.props.music.trackName}
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <strong>By: </strong>
              <a href={this.props.music.artistViewUrl}>
                {this.props.music.artistName}
              </a>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-12">
              <strong>From collection: </strong>{this.props.music.collectionName}
            </div>
          </div>
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
