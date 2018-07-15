import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import CreditCounter from './components/credit_counter.js';
import CustomerData from './components/customer_data.js';

class App extends Component {
  constructor(props) {
    super(props);

    // total credit allowed per customer
    this.state = { allowance: 0 }
    
    this.add_credit = this.add_credit.bind(this)
    this.remove_credit = this.remove_credit.bind(this)
  }

  // adding a credit amount to the total per customer
  add_credit(amount) {
    this.setState({ allowance: this.state.allowance + amount })
  }

  // substracting a credit amount from the total per customer
  remove_credit(amount) {
    this.setState({ allowance: this.state.allowance - amount })
  }

  // rendering components and passing initial counter value and +/- methods
  render() {
    return (      
      <div>
        <SearchBar 
          allowance={this.state.allowance}
        />
        <CreditCounter 
          allowance={this.state.allowance}
        />
        <CustomerData 
          allowance={this.state.allowance}
          add_credit={this.add_credit}
          remove_credit={this.remove_credit}
        />
      </div>
    );
  }
}

export default App;
