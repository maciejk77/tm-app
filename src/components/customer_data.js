import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './card_list';

class CustomerData extends Component {

  render() {    
    const { title, first_name, last_name, annual_income, employment_status, available_cards } = this.props.customer;
    if(!available_cards) { return [] };

    return (
      <div>
        <table style={{border: '1px solid black', textAlign: 'center'}}>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Annual Income</th>
              <th>Employment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{title} {first_name} {last_name}</td>
              <td>{annual_income}</td>
              <td>{employment_status}</td>
            </tr>
          </tbody>
        </table>
        <CardList available_cards={available_cards} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customer: state.customer };
}

export default connect(mapStateToProps)(CustomerData);