import React from 'react';

const CardData = (props) => {
  return (
    props.available_cards.map(card => <div>CARD: {card}</div>)
  )  
}

export default CardData;