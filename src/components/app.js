import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="page-container">
        <SearchBar />
      </div>
    );
  }
}
