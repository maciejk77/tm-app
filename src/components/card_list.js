import React, { Component } from 'react';
import Card from './card.js';
import CreditCounter from './credit_counter.js';
import s from './css/card_list.css'

class CardList extends Component {

  constructor(props) {
    super(props);

    this.state = { total_credit: 0 }
   
    this.add_credit = this.add_credit.bind(this)
    this.remove_credit = this.remove_credit.bind(this)
  }
    
  // adding a credit amount to the total per customer
  add_credit(amount) {
    this.setState({ total_credit: this.state.total_credit + amount })
  }

  // substracting a credit amount from the total per customer
  remove_credit(amount) {
    this.setState({ total_credit: this.state.total_credit - amount })
  }

  render_cards() {
    const { available_cards } = this.props;
    if(!available_cards) { return null };
    
    return available_cards.map(card => 
      <div key={card} classNames={'card_group'}>
        <Card 
          card_name={card}
          total_credit={this.state.total_credit}
          add_credit={this.add_credit}
          remove_credit={this.remove_credit}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <CreditCounter 
          total_credit={this.state.total_credit} 
        />
        {this.render_cards()}
      </div>
    )
  }
}

export default CardList;