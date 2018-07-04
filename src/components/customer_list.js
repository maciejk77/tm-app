import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CustomerList extends Component {
  render() {
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
  
        </tbody>
      </table>
    );
  }
}
