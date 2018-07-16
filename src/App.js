import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import CustomerData from './components/customer_data.js';
import CardList from './components/card_list.js';

const App = (props) => {  
  return (      
    <div>
      <SearchBar />
      <CustomerData />
      <CardList />
    </div>
  );
}

export default App;
