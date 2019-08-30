import React from 'react';

function Player(props) {
    return(
        <>
            <div className = 'rating__cell'>{props.player.name}</div>
            <div className = 'rating__cell'>{props.player.lastname}</div>
            <div className = 'rating__cell'>{props.player.points}</div>
            <div className = 'rating__cell'>{props.player.wons}</div>
            <div className = 'rating__cell'><button onClick={props.deletePlayer}>Delete</button></div>
        </>
    )

}

export default Player;