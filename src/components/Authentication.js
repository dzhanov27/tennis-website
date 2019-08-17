import React from 'react'

class Authentication extends React.Component {

  render () {
    return(
      <>
        <input type="text" placeholder="Login"/>
        <input type="text" placeholder="Password"/>
        <button>Sign in</button>
        <button>Sign up</button>
      </>
    );
  }
}

export default Authentication;