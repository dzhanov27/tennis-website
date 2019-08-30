import React from 'react';

function anons(props){
    return(
      <div className="announce__item">
        <img src={props.announce.img} alt={''}/>
        <h3>{props.announce.text}</h3>
        <p>{props.announce.date}</p>
        <button onClick={props.deleteAnc}>Delete</button>
      </div>
    );
}
export  default anons;