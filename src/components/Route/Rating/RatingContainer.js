import React from 'react';

import Player from './Player';

class RatingContainer extends React.Component {
  state = {
    players: [{
      name: "Amir",
      lastname: 'Kanatbek',
      points: '350',
      wons: '3  '
    }],
    name: '',
    lastname: '',
    points: '',
    wons: '',
  }

  handleInputName = e => { this.setState({ name: e.target.value }) }
  handleInputLastname = e => { this.setState({ lastname: e.target.value }) }
  handleInputPoints = e => { this.setState({ points: e.target.value }) }
  handleInputWons = e => { this.setState({ wons: e.target.value }) }

  addPlayer = () => {
    let arr = this.state.players;
    arr.push({
      name: this.state.name,
      lastname: this.state.lastname,
      points: this.state.points,
      wons: this.state.wons
    });
    console.log(arr)
    this.setState({
      ...this.state,
      players: arr
    })
  }

  deletePlayer = index => {
    let playerArr = this.state.players;
    playerArr.splice(index, 1);
    this.setState({ ...this.state, players: playerArr })
  }

  render() {
    return (
      <div className='players'>
        <h2>RATINGS</h2>
        <input
          onChange={this.handleInputName}
          value={this.state.name}
          type="text"
          placeholder="Enter name" />
        <input
          onChange={this.handleInputLastname}
          value={this.state.lastname}
          type="text"
          placeholder="Enter lastname" />
        <input
          onChange={this.handleInputPoints}
          value={this.state.points}
          type="text"
          placeholder="Enter points" />
        <input
          onChange={this.handleInputWons}
          value={this.state.wons}
          type="text"
          placeholder="Enter wons" />
        <button onClick={this.addPlayer}>add</button>
        <div>{
          this.state.players.map((item, index) => {
            return (
              <Player
                player={item}
                key={index}
                deletePlayer={() => this.deletePlayer(index)}
              />
            );
          })
        }</div>
      </div>
    )
  }
}

export default RatingContainer;