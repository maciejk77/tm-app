import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import CustomerList from './components/customer_list.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CustomerList />
      </div>
    );
  }
}

export default App;
