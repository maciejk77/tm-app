import React from 'react';
//import cn from 'classnames';
import s from './css/credit_counter.css'

const CreditCounter = (props) => {  
  return (
    <div>
    { props.allowance
        ? <div className={'counter'}> Total Selected Credit Allowance: £{props.allowance} </div>
        : null
    }
    </div>
  );
}

export default CreditCounter;