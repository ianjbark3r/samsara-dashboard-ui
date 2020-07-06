import React from 'react';

import Logo from './layout/Logo';
import Filter from './layout/Filter';
import Table from './layout/Table';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Logo />
        <Filter />
        <Table />
      </div>
    </div>
  );
}

export default App;
