import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import CustomerData from './components/customer_data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CustomerData />
      </div>
    );
  }
}

export default App;
