import React from 'react';

function Player(props) {
    return(
        <div>
            <p>Player name: {props.player.name}</p>
            <p>Lastname: {props.player.lastname}</p>
            <p>Points: {props.player.points}</p>
            <p>Wons: {props.player.wons}</p>
            <button onClick={props.deletePlayer}>Delete</button>
        </div>
    )

}

export default Player;