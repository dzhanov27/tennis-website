import React from 'react';

import News from '../components/News';
import SearchNews from '../components/SearchNews'
import '../css/News.css'


class NewsContainer extends React.Component {

  state = {
    post: [
      { title: '1', content: 'news' },
      { title: 'TITLE', content: '21615151' },
      { title: 'smth', content: 'adadada' },
      { title: 'nice', content: 'newewwqeqws' }
    ],
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
      title: '',
      content: '',
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
      <div className="App">
        <h1>NEWS</h1>
        <div className='search__block'>
          {this.state.fitler.map((currentValue, index) =>
            <SearchNews
              key={index}
              name={currentValue.title}
              content={currentValue.content}
            />)}
        </div>


        <input onChange={(event) => this.postName(event.target.value)} type='text' placeholder='title' />
        <input onChange={(event) => this.postContent(event.target.value)} type='text' placeholder='content' />
        <button onClick={() => this.addNewPost()} type='button'>Add news</button>

        <input onChange={(event) => this.searchAdd(event.target.value)} type='text' />
        <button onClick={() => this.search(this.state.search)} type='button'>Search</button>


        {this.state.post.map((currentValue, index) =>
          <News
            key={index}
            name={currentValue.title}
            content={currentValue.content}
            showEditWindow={() => this.showEditWindow(index)}
          />)}

      </div>
    )//return
  }//render
}//class

export default NewsContainer;