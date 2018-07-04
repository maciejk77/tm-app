import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCard } from '../actions/index';

class Card extends Component {
  render() {   
    return (
      <div>
        {this.props.card_name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Card);


