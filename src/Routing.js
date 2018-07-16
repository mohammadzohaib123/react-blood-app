import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Container/Home/Home';
import SignIn from './Container/SignIn/SignIn';
import SignUp from './Container/SignUp/SignUp';
import Donor from './Container/Donor/Donor';
import Needer from './Container/Needer/Needer';

export default class Routing extends Component
{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/home" component={Home} />
                    <Route path="/donor" component={Donor}/>
                    <Route path='/needer' component={Needer}/>
                </div>
            </Router>
        )
    }
}