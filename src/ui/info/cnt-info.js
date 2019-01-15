import { connect } from 'react-redux';

import Info from './cmp-info';

const mapStateToProps = (state, ownProps) => {
  const { collection, currentVideo } = state.videos;

  if (!currentVideo) {
    return {
      video: null
    };
  }

  return {
    video: collection[currentVideo]
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
