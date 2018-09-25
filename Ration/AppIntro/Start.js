import React, { Component } from 'react';
import LogIn from '../AppIntro/Intro';
import App_start from '../User/Home';

export default class Start extends Component{
    render(){
        return(
            <Navi />            
        );
    }
}

const AppStack = StackNavigator({ Home: App_start });
const AuthStack = StackNavigator({ Home: LogIn });

const Navi = SwitchNavigator(
    {
        Auth : AuthStack,
        App : AppStack,
    },
    {
        initialRouteName : 'Auth',
    }
);