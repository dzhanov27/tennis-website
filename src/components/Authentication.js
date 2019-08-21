import React from 'react'

class Authentication extends React.Component {

  render () {
    return(
      <div>
        
        <button onClick = {this.props.logIn} className = 'header__button'>Log in</button>
        <button className = 'header__button'>Sign up</button>
      </div>
    );
  }
}

export default Authentication;