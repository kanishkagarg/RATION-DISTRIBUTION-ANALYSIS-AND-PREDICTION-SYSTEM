import React , { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Home_user from './Home_user';
import Profile from './Profile';
import AboutUs from '../Contact/contact';

export default class Navigate extends Component{
  render(){
    return(
      <Navi />
    );
  }
}

const Navi = createDrawerNavigator({
  Home : {
    screen : Home_user
  },
  Profile : {
    screen : Profile,
  },
  "About Us" : {
    screen : AboutUs
  }
});