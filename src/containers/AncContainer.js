import React, { Component } from 'react'; 

import Announce from '../components/Announce'


class AncContainer extends Component {

    state = {
        announces:[
            {text: 'Кубок Единства', date: '2019-02-10', img: 'https://www.amatour.ru/sites/default/files/styles/tourtament_icon_manualcrop/public/tournament_announce_img/4f008c98.jpg?itok=9dpgOnEG&c=30abe221fffc1035d3a8578d41430ec1'}
        ],
        text: '',
        date: '',
        img: ''
    }

    handleInputText = e => { this.setState({text: e.target.value}) }
    handleInputDate = e => { this.setState({date: e.target.value}) }
    handleInputImg = e => { this.setState({img: e.target.value}) }
    

    addAnc = () => {
        let temp = this.state.announces;
        temp.push({text: this.state.text, date: this.state.date, img: this.state.img})
        this.setState({
            ...this.state,
            announces: temp
        })
        console.log(this.state.announces)
    };

    deleteAnc = index => {
        const data = this.state.announces;
        data.splice(index,1)
        this.setState({...this.state, announces: data});
    }
   
render(){
    return(
            <div>
                <h2>ANNOUNCES</h2>
                <input onChange = {this.handleInputText} type = 'text' placeholder="enter announce"/>
                <input onChange = {this.handleInputDate} type="date"/>
                <input onChange = {this.handleInputImg} type="text" placeholder="enter img src"/>
                <button onClick={this.addAnc}>Add</button>
                <div>{
                    this.state.announces.map((item, index) => {
                        return (
                            <Announce 
                                announce = { item }
                                key = { index }
                                deleteAnc = {() => this.deleteAnc(index)}
                            />
                        );
                    })
                }</div>
            </div>
        );
    }
}
export default AncContainer;