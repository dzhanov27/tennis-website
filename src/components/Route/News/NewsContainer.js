import React from 'react';

import News from './News';


class NewsContainer extends React.Component {

  state = {
    post: [
      { title: 'Не случайное совпадение', content: 'Мы уже три года подряд успешно проводим в столице Латвии турнир ”Riga Open”, который до этого проходил исключительно в мужском парном разряде в формате Pro-Am, и вот впервые решились провести летнюю версию этих соревнований, немного поменяв их концепцию. И она пришлась по вкусу тем, кто провел уикенд с 26 по 28 июля на гостеприимных рижских кортах.' },
      { title: '«Жигули Open 2019»: турнир первый, но… не последний', content: '29 пар, 112 игр в первый день, 29 – во второй. На кортах Gorky Tennis Park в Алматы прошел парный мужской любительский турнир «Жигули Open 2019». В первый день погода была беспощадна к теннисистам - палящее солнце в зените, ни облачка на небе, ни легкого дуновения ветерка. Несмотря на все это, мужчины играли матч за матчем. Поединки часто завершались тай-брейком – настолько велико было желание каждой пары пройти по сетке как можно дальше.' },
      { title: '«Чашка Кофе» становится все крепче', content: 'С 21-23 июня в Новосибирске на кортах "Теннис-Арены" проходил восьмой ежегодный любительский теннисный турнир "Чашка Кофе 2019", организованный сетью ресторанов Дениса Иванова. С момента своего основания турнир окреп и твердо встал на ноги, а география его существенно расширилась – в этот раз в соревнованиях приняли участие около 150 теннисистов из разных городов России (Новосибирска, Москвы, Тюмени, Томска, Северска, Новокузнецка, Красноярска, Минусинска, Барнаула и Кемерово).' },
    ],
    filter: [],
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

  handleSearch = text => {
    this.setState({ ...this.state, search: text });
  }

  search = text => {
    if(text.length > 0){
      let filtred = this.state.post.filter(item => {
        return item.title.toLowerCase().includes(text.toLowerCase())
      });
      this.setState({ ...this.state, filter: filtred });
    }
    else {
      let filtred = [];
      this.setState({ ...this.state, filter: filtred });
    }
  }

  /*Dont edit it*/

  addNewPost = () => {
    let postArr = this.state.post;
    const newPost = {
      title: this.state.title,
      content: this.state.content
    }
    postArr.push(newPost);
    this.setState({
      ...this.state,
      post: postArr
    })
  }

  deleteNews = index => {
    let data = this.state.post;
    data.splice(index, 1)
    this.setState({
      ...this.state, 
      post: data
    });
  }

  /*Edit This*/


  render() {
    return (
      <div className="News">
        <h1 className='News__title'>NEWS</h1>
        <form className='relative'>
          <input
            className="News__inputSearch"
            type='text'
            value={this.state.search}
            onChange={(event) => this.handleSearch(event.target.value)}
            placeholder='Search' />
          <button
            className='News__buttonAdd'
            onClick={() => this.search(this.state.search)}
            type='button'>Find</button>
        </form>

        <div className="search__box">
          {this.state.filter.map((currentValue, index) =>
            <News
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
            deleteNews={() => this.deleteNews(index)}
          />)}

        <div className='News__label'>Subject
            <input className='News__inputTitle' onChange={(event) => this.postName(event.target.value)} type='text' placeholder='title' />
        </div>
        <div className='News__label'>Topic
            <textarea className='News__inputContent' onChange={(event) => this.postContent(event.target.value)} type='text' placeholder='content' />
        </div>
        <button className='News__buttonAdd' onClick={() => this.addNewPost()} type='button'>Post a news</button>

      </div>
    )//return
  }//render
}//class

export default NewsContainer;