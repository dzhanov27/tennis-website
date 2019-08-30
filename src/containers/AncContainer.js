import React, { Component } from 'react'; 

import Announce from '../components/Announce';


class AncContainer extends Component {

    state = {
        announces:[
            {text: 'Кубок Единства', date: '2019-02-10', img: 'https://www.amatour.ru/sites/default/files/styles/tourtament_icon_manualcrop/public/tournament_announce_img/cf5b1e9c.jpg?itok=_XFVS3Wg&c=fa09d385e714a4b2b0855870058b760c'},
            {text: 'AMATOUR OPEN', date: '2019-09-25', img: 'https://www.amatour.ru/sites/default/files/styles/tourtament_icon_manualcrop/public/tournament_announce_img/9a13bb10.jpg?itok=dX0C7KTS&c=f3559cc4033600cd4645000727036abb'}
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
            <div className = 'Article'>
                <h2 className = 'article__title'>ANNOUNCES</h2>
                <input className = 'article__input' onChange = {this.handleInputText} type = 'text' placeholder="enter announce"/>
                <input className = 'article__input'  onChange = {this.handleInputDate} type="date"/>
                <input className = 'article__input'  onChange = {this.handleInputImg} type="text" placeholder="enter img src"/>
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