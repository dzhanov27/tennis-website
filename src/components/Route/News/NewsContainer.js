import React from 'react';

import News from './News';
import SearchNews from './SearchNews'


class NewsContainer extends React.Component {

  state = {
    post: [],
    fitler: [],
    search: '',
    title: '',
    content: '',
  } //function

  postName = (title) => {
    this.setState({ ...this.state, title: title });
  }

  postContent = (content) => {
    this.setState({ ...this.state, content: content });
  }

  searchAdd = (text) => {
    this.setState({ ...this.state, search: text });
  }

  /*Dont edit it*/
  showEditWindow = (index) => {
    let me = document.querySelectorAll('.editWindow')[index];
    me.style.display = 'block';
  }

  addNewPost = () => {
    let postArr = this.state.post;
    const newPost = {
      title: this.state.title,
      content: this.state.content
    }
    postArr.push(newPost);
    this.setState({
      ...this.state,
      post: postArr,
      // title: '',
      // content: '',
    })
  }

  /*Edit This*/

  search = (text) => {
    let filtred = this.state.post.filter(currentValue => currentValue.title.toLowerCase().includes(text.toLowerCase()));
    this.setState({ ...this.state, fitler: filtred });
    document.querySelector('.search__block').style.display = 'block';
  }

  render() {
    return (
      <div className="News">
        <form className = 'relative'>
          <input className = "News__inputSearch" onChange={(event) => this.searchAdd(event.target.value)} type='text' placeholder = 'Что вы ищете?'/>
          <button className = 'News__buttonAdd' onClick={() => this.search(this.state.search)} type='button'>Жмякай</button>
        </form>
        
        <h1 className = 'News__title'>NEWS</h1>
        <hr/>
        <div className='search__block'>
          {this.state.fitler.map((currentValue, index) =>
            <SearchNews
              key={index}
              name={currentValue.title}
              content={currentValue.content}
            />)}
        </div>
        
        {this.state.post.map((currentValue, index) =>
          <News
            key={index}
            name={currentValue.title}
            content={currentValue.content}
            showEditWindow={() => this.showEditWindow(index)}
          />)}

        <div className = 'News__label'>Subject
            <input className = 'News__inputTitle' onChange={(event) => this.postName(event.target.value)} type='text' placeholder='title' />
        </div>
        <div className = 'News__label'>Topic
            <textarea className = 'News__inputContent' onChange={(event) => this.postContent(event.target.value)} type='text' placeholder='content' />
        </div>
        <button className = 'News__buttonAdd' onClick={() => this.addNewPost()} type='button'>Post a news</button>

      </div>
    )//return
  }//render
}//class

export default NewsContainer;