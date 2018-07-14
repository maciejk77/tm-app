import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  state = {
    card_info: {},
    to_add: true
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/cards/${this.props.card_name}`)
      .then(res => {
        const card_info = res.data;
        this.setState({card_info});
      })
  }

  handle_add(credit) {
    this.props.add_credit(credit)
    this.setState({to_add: !this.state.to_add})
  }

  handle_remove(credit) {
    this.props.remove_credit(credit)
    this.setState({to_add: !this.state.to_add})
  }

  render() {  
    const { name, status, apr, balance_mths, purchase_mths, credit_avail } = this.state.card_info;
    return (
      <div 
        style={{border: '1px solid red', textAlign: 'center', width: '400px', margin: '5px 0 5px 0', padding: '5px 0'}}>
        <div>{name}</div>
        <div>{status}</div>
        <div>{apr}</div>
        <div>{balance_mths}</div>
        <div>{purchase_mths}</div>
        <div>{credit_avail}</div>
        { this.state.to_add 
          ? <button onClick={() => this.handle_add(credit_avail)}>ADD</button> 
          : <button onClick={() => this.handle_remove(credit_avail)}>REMOVE</button> 
        }
      </div>
    );
  }
}

export default Card;


