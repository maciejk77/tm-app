import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import CreditCounter from './components/credit_counter.js';
import CustomerData from './components/customer_data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { allowance: 0 }
    this.add_credit = this.add_credit.bind(this)
    this.remove_credit = this.remove_credit.bind(this)
  }

  add_credit(amount) {
    this.setState({ allowance: this.state.allowance + amount })
  }

  remove_credit(amount) {
    this.setState({ allowance: this.state.allowance - amount })
  }

  render() {
    return (
      <div>
        <SearchBar />
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
