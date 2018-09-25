import React ,  { Component } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { View, Text, Header, Container, Content, Body, Footer } from 'native-base';

export default class App extends Component{
    render(){
        return(
            <Container>
                <Header 
                    androidStatusBarColor = '#123456'
                    style={{backgroundColor : '#123456'}}
                >
                    <Body>
                        <Text style={{                    
                            color : "white",
                            fontSize : 20   
                        }}>About Us</Text>
                    </Body>
                </Header>
                    <Content>
                        <View style={styles.upper}>
                            <Text style={styles.upperText}>This App is a notion towards providing more efficient 
                            and fluent distribution of food supplies to the people in need 
                            in India. It also majorly focuses on giving a more fairer and 
                            easier way for division, allocation and distribution of Ration 
                            according to a person’s need, requirement and his financial 
                            capability. It also make sure to fight corruption by authentication
                            data to aadhar card.</Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <View>
                                <Image style={styles.image} source={require('./assets/harsh.jpg')} />
                                <Text style={styles.text}>Harsh Vishnoi</Text>
                            </View>
                            <View>
                                <Image style={styles.image} source={require('./assets/kanishka.jpg')} />
                                <Text style={styles.text}>Kanishka Garg</Text>
                            </View>
                            <View>
                                <Image style={styles.image} source={require('./assets/naima.jpg')} />
                                <Text style={styles.text}>Naima Farooqi</Text>
                            </View>
                            <View>
                                <Image style={styles.image} source={require('./assets/aditya.jpg')} />
                                <Text style={styles.text}>Aditya Gupta</Text>
                            </View>
                        </ScrollView>
                    </Content>
                <Footer
                    style={{backgroundColor : '#123456'}}
                />    
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    upper:{
        height : 320,
        backgroundColor : '#123456'
    },
    image : { 
        width : 190,
        height : 190,
        borderRadius : 190/2,
        margin : 25
    },
    upperText : {
        marginTop : 60,
        marginHorizontal : 5,
        fontSize : 17,
        color : "white",
        textAlign : "center"
    },
    text : {
        textAlign : "center",
        color : '#123456'
    }
});