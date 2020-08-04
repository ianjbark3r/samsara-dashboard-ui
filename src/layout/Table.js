import React, { Component } from 'react';

import Dummy from './Dummy';
import Filter from '../components/Filter';

import { apiKey } from '../Creds';

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
      route: null,
      routes: [],
      drivers: [],
      addresses: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleFilter(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Access-Control-Allow-Origin": 'http://localhost:3000',
        "Access-Control-Allow-Headers": "Accept, Access-Control-Allow-Origin, Authorization"
      },
      redirect: 'follow'
    }
    
    fetch('https://api.samsara.com/v1/fleet/drivers', requestOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
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
            handleFilter={this.handleFilter}
            handleToggle={this.handleToggle} 
          />
          <Dummy data={this.state} />
        </div>
      </div>
    )
  }
}

