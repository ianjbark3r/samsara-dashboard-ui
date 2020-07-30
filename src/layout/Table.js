import React, { Component } from 'react';

import Dummy from './Dummy';
import Filter from '../components/Filter';

export default class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      driver: "",
      tag: "",
      dateToggle: false,
      date1: null,
      date2: null,
      route: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleToggle(e) {
    e.preventDefault();

    this.setState({
      dateToggle: !this.state.dateToggle
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Filter 
            data={this.state}
            handleChange={this.handleChange}
            handleToggle={this.handleToggle} 
          />
          <Dummy data={this.state} />
        </div>
      </div>
    )
  }
}

