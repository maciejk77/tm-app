import React, { Component } from 'react';

class CreditCounter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        allowance: 0
    }
  }
  

  render() {
    return(
      <div>
        TOTAL CREDIT ALLOWANCE: £{this.state.allowance} 
      </div>
    );
  }
}

export default CreditCounter;