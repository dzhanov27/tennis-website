import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import GalleryContainer from './GalleryContainer';
import RatingContainer from './RatingContainer';
import AncContainer from './AncContainer';
import NewsContainer from './NewsContainer';

class Menu extends React.Component {
  temp = () => {
    return (<div><h1>NICE</h1></div>)
  }

  render () {
    return (
      <React.Fragment>
          <BrowserRouter>
            <div className="router">
              <p>Menu</p>
              <ul>
                <li>
                  <Link className="li" to="/">Home</Link>
                </li>
                <li>
                  <Link className="li" to="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link className="li" to="/info">Info</Link>
                </li>
                <li>
                  <Link className="li" to="/areas">Areas</Link>
                </li>
                <li>
                  <Link className="li" to="/news">News</Link>
                </li>
                <li>
                  <Link className="li" to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link className="li" to="/rating">Rating</Link>
                </li>
              </ul>
            </div>
            <div>
              <Route path="/" component={this.temp} />
              <Route path="/news" component={NewsContainer} />
              <Route path="/contacts" component={this.temp} />
              <Route path="/info" component={this.temp} />
              <Route path="/areas" component={this.temp} />
              <Route path="/gallery" component={GalleryContainer} />
              <Route path="/rating" component={RatingContainer} />
            </div>
          </BrowserRouter>
          <AncContainer />
      </React.Fragment>
    );
  }
}

export default Menu;