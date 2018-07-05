import React from 'react';
import Card from './card.js';

const CardList = (props) => {
  return props.available_cards.map(card => 
    <div key={card}>
      <Card card_name={card}/>
    </div>
  )
}

export default CardList;