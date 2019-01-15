import React, { Component } from 'react';

import Search from './ui/search/cnt-search';
import Info from './ui/info/cnt-info';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__search">
          <Search />
        </div>
        <div className="app__info">
          <Info />
        </div>
      </div>
    );
  }
}

export default App;
