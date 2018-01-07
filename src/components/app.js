import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-info">
                Content of this side is updated continuously. As the author is pushing code to his Github repository: https://github.com/sinivuori/redux-music-search-prototype
            </div>
          </div>
        </div>
      </div>
    );
  }
}
