import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FIlterableList/FIlterableList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;