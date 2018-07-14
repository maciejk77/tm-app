import React from 'react';
import Card from './card.js';

const CardList = (props) => {
  return props.available_cards.map(card => 
    <div key={card}>
      <Card 
        card_name={card}
        allowance={props.allowance}
        add_credit={props.add_credit}
        remove_credit={props.remove_credit}
      />
    </div>
  )
}

export default CardList;