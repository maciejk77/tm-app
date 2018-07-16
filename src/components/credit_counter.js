import React from 'react';
//import cn from 'classnames';
import s from './css/credit_counter.css'

const CreditCounter = (props) => {  
  return (
    <div>
    { props.total_credit
        ? <div className={'counter'}> Total Selected Credit Allowance: £{props.total_credit} </div>
        : null
    }
    </div>
  );
}

export default CreditCounter;
