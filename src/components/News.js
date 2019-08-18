import React, { Component } from 'react';

import '../css/News.css'

class News extends Component {
  render() {
    return (
      <div className='item'>
        <h3 className="item__title">{this.props.name}</h3>
        <div className='item__content'>{this.props.content}</div>
        <button type='button'>Edit</button>
      </div>
    )
  }
}

export default News;