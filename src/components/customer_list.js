import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerList extends Component {
  render() {    
    const { title, first_name, last_name, annual_income, employment_status } = this.props.customer;
    return (
      <table>
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
    );
  }
}

function mapStateToProps(state) {
  return { customer: state.customer };
}

export default connect(mapStateToProps)(CustomerList);