import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Last Name' };
  }


  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
        />
        {}
      </div>
    );
  }
}

export default SearchBar;