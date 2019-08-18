import React from 'react'

import Photo from '../components/Photo'
// import Menu from './containers/Menu'

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
        src: 'https://www.amatour.ru/sites/default/files/styles/image_view/public/albums/1787642/117dee33.jpg?itok=oRpLM4E0'
      }
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
      <div>
        <input
          type="text"
          placeholder="enter name"
          value={this.state.valueName}
          onChange={this.handleInputName}
        />
        <input
          type="text"
          placeholder="enter src"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button onClick={this.addImg}>Add</button>
        {this.state.photos.map((item, index) => {
          return (
            <Photo
              photo={item}
              key={index}
              deleteImg={() => this.deleteImg(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default GalleryContainer;