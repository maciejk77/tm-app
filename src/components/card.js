import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  state = {
    card_info: {}
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/cards/${this.props.card_name}`)
      .then(res => {
        const card_info = res.data;
        this.setState({card_info});
      })
  }

  render() {  
    const { name, status, apr, balance_mths, purchase_mths, credit_avail } = this.state.card_info;
    return (
      <div style={{border: '1px solid red', textAlign: 'center', width: '400px', margin: '5px 0 5px 0', padding: '5px 0'}}>
        <div>{name}</div>
        <div>{status}</div>
        <div>{apr}</div>
        <div>{balance_mths}</div>
        <div>{purchase_mths}</div>
        <div>{credit_avail}</div>
        <button>ADD</button>
      </div>
    );
  }
}

export default Card;


