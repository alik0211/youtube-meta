import { connect } from 'react-redux';

import Search from './cmp-search';

import { getVideo } from '../../actions/videos';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  getVideo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
