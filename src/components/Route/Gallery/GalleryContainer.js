import React from 'react'

import Photo from './Photo';
import '../../../font-awesome/lower/all.min.css'

class GalleryContainer extends React.Component {
  state = {
    photos: [
      {
        name: 'photo 1',
        src: 'https://www.amatour.ru/sites/default/files/styles/image_view/public/albums/1795850/d6a956b2.jpg?itok=mnqhB3dY'
      },
      {
        name: 'photo 2',
        src: 'https://www.amatour.ru/sites/default/files/styles/image_view/public/albums/1795850/ce0d1e38.jpg?itok=currX3YN'
      }, 
      {
        name: 'photo 3',
        src: 'https://www.amatour.ru/sites/default/files/styles/image_view/public/albums/1816192/714bc0cf.jpg?itok=771MiBxX'
      },
      {
        name: 'photo 4',
        src: 'https://www.amatour.ru/sites/default/files/styles/image_view/public/albums/1816192/a083843b.jpg?itok=vkVnpe2K'
      } ,
      {
        name: 'photo 5',
        src: 'https://www.amatour.ru/sites/default/files/styles/image_view/public/albums/1816192/77e854e7.jpg?itok=DwFknQ_F'
      },
    ],
    value: '',
    valueName: ''
  }

  handleInput = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleInputName = event => {
    this.setState({
      valueName: event.target.value
    });
  }

  addImg = () => {
    let arr = this.state.photos;
    arr.push({ name: this.state.valueName, src: this.state.value })
    console.log(arr)
    this.setState({
      ...this.state,
      photos: arr
    })
  }

  deleteImg = index => {
    const data = this.state.photos;
    data.splice(index, 1)
    this.setState({
      ...this.state, 
      photos: data
    });
    this.setState({
      value: '',
      valueName: ''
    })
  }

  render() {
    return (
      <div className = 'Gallery'>
        <h1 className = 'gallery__title'>Наша галлерея</h1>
        <input
        className = 'gallery__inwiputImg'
          type="text"
          placeholder="enter src"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <input
          className = 'gallery__inputName'
          type="text"
          placeholder="enter name"
          value={this.state.valueName}
          onChange={this.handleInputName}
        />
        <button className = 'AddButton' onClick={this.addImg}>Add</button>
        <div className = 'gallery__block'>
        {this.state.photos.map((item, index) => {
          return (
            <Photo
              photo={item}
              key={index}
              name = {item.name}
              deleteImg={() => this.deleteImg(index)}
            />);})}
        </div>
        
      </div>
    );
  }
}

export default GalleryContainer;