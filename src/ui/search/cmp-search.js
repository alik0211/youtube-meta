import React from 'react';

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
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Video id. E.g.: SXiSVQZLje8"
            onChange={this.handleChange}
            value={searchString}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
