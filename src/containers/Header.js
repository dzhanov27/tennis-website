import React , {Component}from 'react'
import { Link } from 'react-router-dom';

import Authentication from '../components/Authentication';
import PopUpWindow from '../components/PopUpWindow';

class Header extends Component {

  logIn = () =>{
    document.querySelector('.iIsOpacity').style.display = 'block';
    document.querySelector('.header__logIn').style.display = 'block';
  }

  close = (me) =>{
    document.querySelector('.iIsOpacity').style.display = 'none';
    document.querySelector('.header__logIn').style.display = 'none';
  }

  render(){
    return(
      <div className = 'header'> 
        <Link className = 'header__link' to = '/'>HOME</Link>
        <h1 className ="header__title">TENNIS ASSOCIATION</h1>
        <Authentication 
          logIn = {() =>this.logIn()}
        />

        <div className = 'iIsOpacity'/>
        <PopUpWindow
        close = {()=>this.close()}
        />
      </div>
    );//return
  }//render

  }//class

export default Header;