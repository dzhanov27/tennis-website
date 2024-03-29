import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import NewsContainer from '../components/Route/News/NewsContainer';
import GalleryContainer from '../components/Route/Gallery/GalleryContainer';
import RatingContainer from '../components/Route/Rating/RatingContainer';
import AreaContainer from '../components/Route/Area/AreaContainer'
import Info from '../components/Info'
import Contacts from '../components/Contacts'

class Content extends Component{
    temp = () => {
        return (<div><h1>NICE</h1></div>)
      }
    render(){
        return(
            <div className = 'Content'>
                <Switch>
                    <Route exact path="/" render={() => <NewsContainer/>} />
                    <Route exact path="/contacts" component={() => <Contacts/>} />
                    <Route exact path="/info" component={() => <Info/>} />
                    <Route exact path="/areas" render={() => <AreaContainer/>} />
                    <Route exact path="/gallery" render = {() => <GalleryContainer/>} />
                    <Route exact path="/rating" render={() => <RatingContainer/>} />
                </Switch>
            </div>
        )
        
    }
};

export default Content;