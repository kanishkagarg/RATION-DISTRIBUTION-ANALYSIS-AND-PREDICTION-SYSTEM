import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, View, Form, Item, Label, Input, Text } from 'native-base'; 
import * as firebase  from '../AppIntro/connect';

export default class SignUp extends Component {    

    state = {
        Email : '',
        password : '',
        Gender : '',
        Name : '',
        Age : '',
    }

    createUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                () => {this.props.navigation.navigate('App')}
            )
        }
        catch (error) {
            alert(error.toString())
        }
    }
    
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.style}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input value={this.state.Email}
                                    keyboardType = "email-address"
                                    onChangeText={(value) => this.setState({ Email: value })}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input value={this.state.Name}
                                    onChangeText={(value) => this.setState({ Name: value })}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Gender</Label>
                                <Input value={this.state.Gender}
                                    onChangeText={(value) => this.setState({ Gender: value })}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Age</Label>
                                <Input value={this.state.Age}
                                    keyboardType = "numeric"
                                    onChangeText={(value) => this.setState({ Age: value })}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={(value) => this.setState({ password: value })}
                                />
                            </Item>

                            <Button
                                //this is login button
                                block
                                info
                                onPress={() => this.createUser(this.state.Email, this.state.password)}
                                style={{
                                    marginHorizontal: 8,
                                    marginTop: 10,
                                    backgroundColor: '#123456',
                                }}>
                                <Text style={{ fontSize: 20 }}>Sign Up</Text>
                            </Button>
                                
                            <Button
                                //this is login button
                                block
                                info
                                onPress={() => this.props.navigation.navigate('Auth')}
                                style={{
                                    marginHorizontal: 8,
                                    marginTop: 10,
                                    backgroundColor: '#123456',
                                }}>
                                <Text style={{ fontSize: 20 }}>Back</Text>
                            </Button>    
                        
                        </Form>
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