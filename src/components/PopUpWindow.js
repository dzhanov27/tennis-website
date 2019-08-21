import React from 'react';

function PopUpWindow(props){
    return(
        <div className = 'header__logIn'>
          <div className = 'relative'>
            <h2 className = 'logIn__title'>Log In</h2>
            <div className = 'logIn__label' >Email
              <input className = 'logIn__input' type = 'text' placeholder = 'add email address'/>
            </div>
            <div className = 'logIn__label'>Password
              <input className = 'logIn__input' type = 'password' placeholder = 'your password'/>
            </div>
            <button className = 'logIn__button'>Log in</button>
            <div onClick = {props.close} className = 'logIn__close'>X</div>
          </div>
        </div>
    );
}


export default PopUpWindow;

