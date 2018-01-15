import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="page-container">
        <SearchBar />
        <div className="row" id="notification-container">
          <div className="col-md-12">
            <div className="alert alert-info">
                Content of this side is updated continuously. As the author is pushing code to his <a href="https://github.com/sinivuori/redux-music-search-prototype">Github repository</a>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
