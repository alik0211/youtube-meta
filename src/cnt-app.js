import { connect } from 'react-redux';

import { initApp } from './actions/app';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  initApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
