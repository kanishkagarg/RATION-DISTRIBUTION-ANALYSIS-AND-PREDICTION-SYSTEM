import React , { Component } from 'react';
import { SwitchNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LogIn from '../SignIn_SignUp/LogIn';
import App_start from '../User/Home';

const styles = StyleSheet.create({
  Head: {
    fontSize : 45,
    fontWeight : "bold",
    color : 'white'
  },
  text : {
    fontSize : 25,
    color : 'white'
  },
  image : {
    height : 280,
    width : 280,
    borderRadius : 140
  },
  image1 : {
    height : 180,
    width : 180,
    borderRadius : 90
  }
});

const slides = [
  {
    key: 'Intro1',
    title: 'Hello!',
    textStyle: styles.text,
    text: 'Ration Distribution Analysis and Prediction System',
    titleStyle: styles.Head,
    backgroundColor: '#FF6666',
  },
  {
    key: 'Intro2',
    title: 'Our Goals',
    imageStyle: styles.image1,
    image: require('./Assets/Poverty.jpg'),
    textStyle: styles.text,
    text: 'No Poverty\n\nZero Hunger',
    titleStyle : styles.Head,
    backgroundColor: '#3399FF',
  },
  {
    key: 'Intro3',
    title: 'Fight Corruption',
    image: require('./Assets/Corruption.jpg'),
    imageStyle: styles.image,
    titleStyle : styles.Head,
    backgroundColor: '#123456',
  }
];

export default class App extends Component {

  state = {
    appIntro : false
  }
  
  render() {
    if (this.state.appIntro){
      return <Navi />
    }
    else {
      return <AppIntroSlider
                slides={slides}
                onDone={() => {this.setState({appIntro : true})}}
             />
    }
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