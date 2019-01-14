import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    return (
      <div className="App">App</div>
    );
  }
}

export default App;
