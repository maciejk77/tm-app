import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './card_list';
import s from './css/customer_data.css'

class CustomerData extends Component {

  render() {    
    const { title, first_name, last_name, annual_income, employment_status, available_cards } = this.props.customer;
    if(!available_cards) { return [] };

    return (
      <div>
        <table className={'customer_data'}>
          
          <thead>
            <tr>
              <th className={'customer_data__label'}>Customer Name</th>
              <td>{title} {first_name} {last_name}</td>
            </tr>
            <tr>
              <th className={'customer_data__label'}>Annual Income</th>
              <td>£{annual_income}</td>
            </tr>
            <tr>
              <th className={'customer_data__label'}>Employment Status</th>
              <td>{employment_status}</td>
            </tr>
          </thead>
          
        </table>
        <CardList 
          available_cards={available_cards} 
          allowance={this.props.allowance}
          add_credit={this.props.add_credit}
          remove_credit={this.props.remove_credit}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customer: state.customer };
}

export default connect(mapStateToProps)(CustomerData);