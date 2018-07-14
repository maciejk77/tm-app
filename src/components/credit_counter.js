import React from 'react';

const CreditCounter = (props) => {  
  return (
    <div>
    { props.allowance
        ? <div> Total Selected Credit Allowance: £{props.allowance} </div>
        : <div> &nbsp; </div>
    }
    </div>
  );
}

export default CreditCounter;