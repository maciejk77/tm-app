import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCustomer } from '../actions/index';
//import cn from 'classnames';
import s from './css/search_bar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
    this.handle_change = this.handle_change.bind(this);
    this.handle_submit = this.handle_submit.bind(this);
  }

  handle_change(event) {
    this.setState({ name: event.target.value });
  }

  handle_submit(event) {
    event.preventDefault();
    // fetching customer data
    this.props.getCustomer(this.state.name);
    // clearing input box after submit
    this.setState({ name: '' });
  }

  render() {
    return (
      <form 
        onSubmit={this.handle_submit}
        className={'search_bar'}
      >
        <input
          className={'search_bar__box'}
          value={this.state.name}
          onChange={this.handle_change}
        />
        <span>
          <button 
            type="submit" 
            className={'search_bar__button'}
          >
            CHECK
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCustomer }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
