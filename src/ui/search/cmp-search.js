import React from 'react';
import { getVideoIdFromString } from '../../helpers/video';

import './search.css';

class Search extends React.Component {
  state = {
    searchString: '',
    error: null
  };
  handleChange = event => {
    this.setState({
      searchString: event.currentTarget.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      error: null
    });

    this.props
      .getVideo(getVideoIdFromString(this.state.searchString))
      .then(action => {
        if (action.error) {
          this.setState({
            error: action.payload.message
          });
        }

        return action;
      });
  };
  render() {
    const { error, searchString } = this.state;
    const { isFetched } = this.props;

    return (
      <div className="search">
        <div className="search__inner">
          <form onSubmit={this.handleSubmit} className="search__form">
            <input
              type="text"
              placeholder="Video url or id"
              onChange={this.handleChange}
              value={searchString}
              className="search__input"
              disabled={isFetched}
              autoFocus
            />
            <button
              type="submit"
              className="search__button"
              disabled={isFetched}
            >
              Search
            </button>
            {!!error && <div className="search__error">{error}</div>}
          </form>
          <a
            href="https://github.com/alik0211/youtube-meta"
            className="search__github"
          >
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Search;
