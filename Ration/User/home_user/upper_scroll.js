import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';

export default class upper extends Component{
    render(){
        return(
            <View>
                <ScrollView showsHorizontalScrollIndicator = {false} horizontal = {true} >
                    <View>
                        <Image
                            style={styles.image} 
                            source={require('../User_icons/AadharCard.jpg')}
                        />
                        <Text style={styles.text}>Link your AadharCard</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image} 
                            source={require('../User_icons/Ration.jpg')}
                        />
                        <Text style= {styles.text}>Check Ration</Text>
                    </View>
                </ScrollView>

                <Button block style = {styles.button}>
                    <Text style={{fontSize: 20}}>Scan</Text>
                </Button>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    image : {
        width: 200,
        height: 150,                       
        borderRadius : 10,
        margin: 10,
    },
    text : {
        textAlign : "center"
    },
    button : {
        marginVertical: 20,
        marginHorizontal : 5,
        backgroundColor : '#123456'
    },
    scroll : {
        marginTop : 10
    }
})