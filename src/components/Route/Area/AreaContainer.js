import React from 'react';

import Area from './Area';

class AreaContainer extends React.Component {
  state = {
    areas: [
      {
        name: "N-Club",
        adress: '75/2 ул. Токтогула, Бишкек',
        time: '8:00 - 23:00',
      },
      {
        name: "S-Club",
        adress: '75/2 ул. Токтогула, Бишкек',
        time: '8:00 - 23:00',
      },
      {
        name: "B-Club",
        adress: '75/2 ул. Токтогула, Бишкек',
        time: '8:00 - 23:00',
      },
    ],
    name: '',
    adress: '',
    time: '',
  }

  handleInputName = e => { this.setState({ name: e.target.value }) }
  handleInputTime = e => { this.setState({ time: e.target.value }) }
  handleInputAdress = e => { this.setState({ adress: e.target.value }) }

  addArea = () => {
    let arr = this.state.areas;
    arr.push({
      name: this.state.name,
      adress: this.state.adress,
      time: this.state.time,
    });
    console.log(arr)
    this.setState({
      ...this.state,
      areas: arr
    })
  }

  deleteArea = index => {
    let areaArr = this.state.areas;
    areaArr.splice(index, 1);
    this.setState({ ...this.state, areas: areaArr })
  }

  render() {
    return (
      <div className='areas'>
        <h2>AREAS</h2>
        <input
          onChange={this.handleInputName}
          value={this.state.name}
          type="text"
          placeholder="Enter name" />
        <input
          onChange={this.handleInputAdress}
          value={this.state.adress}
          type="text"
          placeholder="Enter adress" />
        <input
          onChange={this.handleInputTime}
          value={this.state.time}
          type="text"
          placeholder="Enter workig hours" />
        <button onClick={this.addArea}>add</button>
        <div>{
          this.state.areas.map((item, index) => {
            return (
              <Area
                area={item}
                key={index}
                deleteArea={() => this.deleteArea(index)}
              />
            );
          })
        }</div>
      </div>
    )
  }
}

export default AreaContainer;