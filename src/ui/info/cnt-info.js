import { connect } from 'react-redux';

import Info from './cmp-info';

const mapStateToProps = (state, ownProps) => {
  const { collection: videos, currentVideo } = state.videos;
  const { collection: categories } = state.categories;

  if (!currentVideo) {
    return {
      video: null
    };
  }

  let video = videos[currentVideo];
  const { categoryId } = video.snippet;

  if (categoryId in categories) {
    video = {
      ...video,
      snippet: {
        ...video.snippet,
        category: categories[categoryId].snippet.title
      }
    };
  }

  return {
    video
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
