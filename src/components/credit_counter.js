import React, { Component } from 'react';

class CreditCounter extends Component {
  render() {
    return(
      <div>
        TOTAL CREDIT ALLOWANCE: £{this.props.allowance} 
      </div>
    );
  }
}

export default CreditCounter;