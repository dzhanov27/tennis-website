import React from 'react'

class Search extends React.Component {
  
  state = {
    value: ""
  }

  handleInput = event => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    });
  }

  showFound = () => {
    
  }

  render () {
    return(
      <div>
        <input
          placeholder="Search"
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;