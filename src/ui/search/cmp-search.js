import React from 'react';

class Search extends React.Component {
  state = {
    searchString: ''
  };
  handleChange = event => {
    this.setState({
      searchString: event.currentTarget.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.getVideo(this.state.searchString);
  };
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Video id. E.g.: SXiSVQZLje8"
            onChange={this.handleChange}
            value={this.state.searchString}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
