import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';

export default class Routing extends Component
{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/home" component={Home} />
                </div>
                </Router>
        )
    }
}