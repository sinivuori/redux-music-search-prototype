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
              <p><i className="fas fa-spinner"></i>&nbsp;&nbsp;&nbsp;Site is under construction.</p>
              <p><i className="fas fa-code"></i>&nbsp;&nbsp;&nbsp;Source code can be found at <a href="https://github.com/sinivuori/redux-music-search-prototype">this <i className="fab fa-github"></i> repository</a>.</p>
              <p><i className="fas fa-music"></i>&nbsp;&nbsp;&nbsp;API is provided courtesy of <a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">iTunes API</a>.</p>
              <p><i className="fas fa-music"></i>&nbsp;&nbsp;&nbsp;Preview of songs is provided courtesy of <a href="https://www.apple.com/itunes/">iTunes</a>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
