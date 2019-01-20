import React, { Component } from 'react';

import Search from './ui/search/cnt-search';
import Info from './ui/info/cnt-info';
import Footer from './ui/footer/cmp-footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="app__content">
          <div className="app__search">
            <Search />
          </div>
          <div className="app__info">
            <Info />
          </div>
        </main>
        <footer className="app__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
