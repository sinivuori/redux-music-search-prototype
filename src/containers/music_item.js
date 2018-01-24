import React, {Component} from 'react';
import {selectMusic} from '../actions/action_select_music';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MusicItem extends Component {
  render() {
    return (
      <div className="row music-item">
        <div className="col-md-2">
          <img src={this.props.music.artworkUrl100} alt={this.props.music.trackName} className="rounded" />
        </div>
        <div className="col-md-4">
          <div className="music-info-text">
            <strong>{this.props.music.trackName}</strong>
          </div>
          <div className="music-info-text">
            <p><strong>By:</strong> {this.props.music.artistName}</p>
          </div>
        </div>
        <div className="col-md-1">
          <button className="btn btn-default" onClick={() => this.props.selectMusic(this.props.music)}><i className="far fa-play-circle"></i></button>
        </div>
        <div className="col-md-3">
          <a href={this.props.music.trackViewUrl}>Purchase at iTunes Store <i className="fab fa-itunes"></i></a>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMusic: selectMusic}, dispatch);
}

export default connect(null, mapDispatchToProps)(MusicItem);
