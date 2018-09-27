import React, { Component } from 'react';
import { StyleSheet ,Switch} from 'react-native';
import { Button, Input, Header, Footer, Label, Text, Radio, Form, Item, Container, View, Content, Icon } from 'native-base';
import * as firebase from 'firebase';

export default class login extends Component{

    componentWillMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBeKvF8SoCa5erTETgkBU_REBCZOzxgwaw",
                authDomain: "vikavi-01.firebaseapp.com",
                databaseURL: "https://vikavi-01.firebaseio.com",
                projectId: "vikavi-01",
                storageBucket: "vikavi-01.appspot.com",
                messagingSenderId: "960925598365"
              });
        }
    }


    state = {
        User :'',
        Email : '',
        password : '',
        switch : false
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(
                () => {this.props.navigation.navigate('App')}
            )
        }
        catch (error) {
            console.log(error.toString())
        }
    }


    createUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
                console.log(user)
            })
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    
    render(){
        return(            
         <Container>
                <Content>
                  <View style={styles.style}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input value = {this.state.Email}
                                    keyboardType = "email-address"
                                   onChangeText = {(value) => this.setState({Email : value})}
                            />
                        </Item>
                       
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input 
                                secureTextEntry = {true}
                                value = {this.state.password}
                                onChangeText = {(value) => this.setState({password : value})}
                            />
                        </Item>

                        <Button 
                         //this is login button
                                block 
                                info 
                                onPress = {() => this.loginUser(this.state.Email, this.state.password)}
                                style={{
                                    marginHorizontal:8,
                                    marginTop: 10,
                                    backgroundColor: '#123456',
                        }}>
                            <Text style={{fontSize: 20}}>Log In</Text>
                        </Button>
                       
                        <Text onPress = {() => {alert('hello')}}
                            style = {styles.underText}
                            //this is to reset password
                        >
                            Reset Password
                        </Text>
                    </Form>
                  </View>  

                    <View style={styles.style}>

                        <Button
                         //this is sign up button 
                                block 
                                info 
                                onPress = {() => this.props.navigation.navigate('SignUp')}
                                style={{
                                    marginHorizontal:8,
                                    marginTop: 10,
                                    backgroundColor: '#123456',
                        }}>
                            <Text style={{fontSize: 20}}>Sign Up with email</Text>
                        </Button>

                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  underText :{ 
      textAlign: 'center',
      marginTop: 8,
      color: '#123456'
  },
  style : {
      marginVertical : 80
  }
}); 