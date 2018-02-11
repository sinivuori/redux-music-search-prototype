import React, {Component} from 'react';
import {selectMusic} from '../actions/action_select_music';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MusicItem extends Component {
  render() {
    return (
      <div className="row music-item">
        <div className="col-md-2 col-xs-2 music-info-text">
          <img src={this.props.music.artworkUrl100} alt={this.props.music.trackName} className="music-thumbnail rounded" onClick={() => this.props.selectMusic(this.props.music)} />
          <div className="play-icon-positioner">
            <div className="play-icon-container">
              <i className="fas fa-play fa-3x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-xs-10">
          <div className="row">
            <div className="col-md-12">
              <div className="music-info-text">
                <strong>{this.props.music.trackName}</strong>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="music-info-text">
                <p><strong>By:</strong> {this.props.music.artistName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMusic: selectMusic}, dispatch);
}

export default connect(null, mapDispatchToProps)(MusicItem);
