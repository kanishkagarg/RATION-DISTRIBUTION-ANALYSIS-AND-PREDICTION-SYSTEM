import React, { Component } from 'react';
import Intro from './AppIntro/Intro';
import Profile from './User/Profile';

export default class App extends Component{    
    render(){
        return(
            <Profile />
        );
    }
}