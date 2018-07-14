import React, { Component } from 'react';
import axios from 'axios';
import cn from 'classnames';
import s from './css/card.css'

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
      <div>
        <table className={'card'}>
          <tr>
            <th>Card Name</th>
            <td className={'card__data'}>{name}</td>
          </tr>
          <tr>
            <th>Entitled Customers</th>
            <td className={'card__data'}>{status}</td>
          </tr>

          <tr>
            <th>APR</th>
            <td className={'card__data'}>{apr}</td>
          </tr>
          <tr>
            <th>Balance [Months]</th>
            <td className={'card__data'}>{balance_mths}</td>
          </tr>

          <tr>
            <th>Purchase [Months]</th>
            <td className={'card__data'}>{purchase_mths}</td>
          </tr>
          <tr>
            <th>Available Credit</th>
            <td className={'card__data'}>{credit_avail}</td>
          </tr>
          <tbody>
          <div>
            { this.state.to_add 
              ? <button className={cn('card__button', 'button_add')} onClick={() => this.handle_add(credit_avail)}>ADD</button> 
              : <button className={cn('card__button', 'button_remove')} onClick={() => this.handle_remove(credit_avail)}>REMOVE</button> 
            }
          </div>
          </tbody>
        </table>
      </div>  
    );
  }
}

export default Card;


