import React, { Component } from 'react';

const CreditCounter = (props) => {  
  return(
    <div>
      TOTAL CREDIT ALLOWANCE: £{props.allowance} 
    </div>
  );
}

export default CreditCounter;