import React from 'react';

function Area(props) {
    return(
        <div>
            <p>Area name: {props.area.name}</p>
            <p>Adress: {props.area.adress}</p>
            <p>Working hours: {props.area.time}</p>
            <button onClick={props.deleteArea}>Delete</button>
        </div>
    )
}

export default Area;