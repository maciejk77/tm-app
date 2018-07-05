import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import CreditCounter from './components/credit_counter.js';
import CustomerData from './components/customer_data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CreditCounter />
        <CustomerData />
      </div>
    );
  }
}

export default App;
