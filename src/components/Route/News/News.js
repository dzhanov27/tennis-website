import React, { Component } from 'react';

class News extends Component {


  render() {
    const time = new Date;
    return (
      <div className='News__item'>
        <h3 className="News__item_title">{this.props.name}</h3>
        <div className='News__item_content'>{this.props.content}</div>
        <div className = 'News__item_time'></div>
        <button type='News__item_button'>Edit</button>
      </div>
    )
  }
}

export default News;