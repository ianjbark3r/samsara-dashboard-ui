import React, { Component } from 'react';

import Dummy from './Dummy';
import Filter from './Filter';

export default class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      driver: null,
      tag: null,
      date1: null,
      date2: null,
      route: null
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Filter />
          <Dummy data={this.state} />
        </div>
      </div>
    )
  }
}

