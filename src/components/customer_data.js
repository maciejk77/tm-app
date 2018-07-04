import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardData from './card_data';

class CustomerData extends Component {

  render() {    
    const { title, first_name, last_name, annual_income, employment_status, available_cards } = this.props.customer;
    return (
      <div>
        <table style={{border: '1px solid black', textAlign: 'center'}}>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Annual Income</th>
              <th>Employment Status</th>
              <th>Credit Cards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{title} {first_name} {last_name}</td>
              <td>{annual_income}</td>
              <td>{employment_status}</td>
              <td>{available_cards}</td>
            </tr>
          </tbody>
        </table>
        <CardData available_cards={["Anywhere Card", "Liquid Card", "Student Life Card"]} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customer: state.customer };
}

export default connect(mapStateToProps)(CustomerData);