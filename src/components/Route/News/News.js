import React, { Component } from 'react';

import '../../../App.css'

class News extends Component {

  render() {
    return (
      <div className='News__item'>
        <h3 className="News__item_title">{this.props.name}</h3>
        <div className='News__item_content'>{this.props.content}</div>
        <button className='News__buttonAdd' onClick={this.props.deleteNews}>Delete</button>
        <div className = 'News__item_time'></div>
      </div>
    )
  }
}

export default News;