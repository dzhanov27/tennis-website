import React from 'react'

const Photo = (props) => {
  return (
    <div>
      <img src={props.photo.src} alt={props.photo.name}/>
      <button onClick={props.deleteImg}>Delete</button>
    </div>
  );
}

export default Photo;