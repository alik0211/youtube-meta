import React, { Component } from 'react';

import Search from './ui/search/cnt-search';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__search">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
