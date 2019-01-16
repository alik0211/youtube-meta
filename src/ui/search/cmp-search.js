import React from 'react';

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

    this.props.getVideo(this.state.searchString).then(action => {
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

    return (
      <div className="search">
        <div className="search__inner">
          <form onSubmit={this.handleSubmit} className="search__form">
            <input
              type="text"
              placeholder="Video id. E.g.: SXiSVQZLje8"
              onChange={this.handleChange}
              value={searchString}
              className="search__input"
            />
            <button type="submit" className="search__button">
              Search
            </button>
            {!!error && <div className="search__error">{error}</div>}
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
