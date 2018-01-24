import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import MusicList from '../containers/music_list';
import MusicDetail from '../containers/music_detail';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="page-container">
        <SearchBar />
        <MusicDetail />
        <MusicList />
      </div>
    );
  }
}
