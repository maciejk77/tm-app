import React, { Component } from 'react';
import Card from './card.js';

class CardList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { allowance: 0 }
  //   this.add_credit = this.add_credit.bind(this)
  // }

  // add_credit(amount) {
  //   this.setState({ allowance: this.state.allowance + amount })
  // }

  render() {
    return this.props.available_cards.map(card => 
      <div key={card}>
        <Card 
          card_name={card}
          allowance={this.props.allowance}
          add_credit={this.props.add_credit}
          remove_credit={this.props.remove_credit}
        />

      </div>
    )
  }
}

export default CardList;