import React from 'react'

const Photo = (props) => {
  return (
    <div className = 'gallery__item'>
      <img className ='item__img' src={props.photo.src} alt={props.photo.name}/>
      <hr/>
      <div className = 'item__name'>{props.name}
      <i  onClick={props.deleteImg} className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export default Photo;