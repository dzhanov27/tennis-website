import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  

  render () {
    return (
      <div className = 'relative'>
           
           <div className = 'SideBar__menu'>
              <span className = 'line'/>
            </div>  

            <div className="SideBar">
              <h3 className = 'SideBar__title'>Menu</h3>
              <ul className = 'SideBar__block'>
                <li><Link className="SideBar__item" to="/">Home</Link></li>
                <li><Link className="SideBar__item" to="/contacts">Contacts</Link></li>
                <li><Link className="SideBar__item" to="/info">Info</Link></li>
                <li><Link className="SideBar__item" to="/areas">Areas</Link></li>
                <li><Link className="SideBar__item" to="/gallery">Gallery</Link></li>
                <li><Link className="SideBar__item" to="/rating">Rating</Link></li>
              </ul>
            </div>
            
          
      </div>
    );
  }
}

export default Menu;