import React from 'react';
import Card from './card.js';
import s from './css/card_list.css'

const CardList = (props) => {
  return props.available_cards.map(card => 
    <div key={card} classNames={'card_group'}>
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