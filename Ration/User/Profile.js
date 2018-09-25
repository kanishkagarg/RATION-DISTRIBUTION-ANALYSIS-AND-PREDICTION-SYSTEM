import React, { Component } from 'react';
import { Image ,StyleSheet ,TextInput } from 'react-native';
import { Container, Header, Content, Card, Button, Form, Label, Input, CardItem, Item, Thumbnail, Text, Icon, Left, Body, Right, View } from 'native-base';

export default class CardImageExample extends Component {
    
    static navigationOptions = {
        title: 'Profile',
      };

    state = {
        edit : false,
        buttonName : "Edit"
    }

    func = (edit, buttonName) => {
        if(buttonName === "Edit"){
            this.setState({buttonName : "Done"}),
            this.setState({edit : true})
        }
        else{
            this.setState({buttonName : "Edit"}),
            this.setState({edit : false})
        }
    }

  render() {
    return (
      <Container>
        <Content>
            
            <View style={styles.view}>
                <Image source={require('../Contact/assets/harsh.jpg')} style={styles.image}/>
            </View>
            
            <Form>
                <Item floatingLabel>
                    <Label>Name</Label>
                    <Input 
                        value = {this.state.Email}
                        edishtable = {this.state.edit}
                        onChangeText = {(value) => this.setState({Email : value})}
                    />
                </Item>
                
                <Item floatingLabel>
                    <Label>Address</Label>
                    <Input 
                        value = {this.state.Email}
                        editable = {this.state.edit}
                        onChangeText = {(value) => this.setState({Email : value})}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>Gender</Label>
                    <Input 
                        value = {this.state.Email}
                        editable = {this.state.edit}
                        onChangeText = {(value) => this.setState({Email : value})}
                    />
                </Item>
                
                <Item floatingLabel>
                    <Label>GST NO</Label>
                    <Input 
                        value = {this.state.Email}
                        editable = {this.state.edit}
                        onChangeText = {(value) => this.setState({Email : value})}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>Aadhar Card</Label>
                    <Input 
                        value = {this.state.password}
                        editable = {this.state.edit}
                        onChangeText = {(value) => this.setState({password : value})}
                    />
                </Item>
            </Form>

            <Button
                    block 
                    info 
                    onPress = {() => this.func(this.state.edit, this.state.buttonName)}
                    style={{
                        marginTop: 20,
                        backgroundColor: '#123456',
            }}>
                <Text style={{fontSize: 20}}>{this.state.buttonName}</Text>
            </Button>    

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    input : {
        margin : 5,
        fontSize : 18,
        color : '#123456'
    },
    view : {
        height : 300,
        backgroundColor : '#123456'
    },
    image : {
        marginVertical : 40,
        marginHorizontal : 100,
        height : 220,
        width : 220,
        borderRadius : 110,
        borderColor : "white",
        borderWidth : 2
    }
})