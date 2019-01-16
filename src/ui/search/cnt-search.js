import { connect } from 'react-redux';

import Search from './cmp-search';

import { getVideo } from '../../actions/videos';

const mapStateToProps = (state, ownProps) => {
  return {
    isFetched: state.videos.isFetched
  };
};

const mapDispatchToProps = {
  getVideo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
