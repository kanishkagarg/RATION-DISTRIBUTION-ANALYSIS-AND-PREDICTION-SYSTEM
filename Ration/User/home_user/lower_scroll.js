import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';

export default class upper extends Component{
    render(){
        return(
        <View>    
            <Button block style = {styles.button}>
                <Text style={{fontSize: 20}}>Price List</Text>
            </Button>
            <ScrollView style = {styles.scroll} showsHorizontalScrollIndicator = {false} horizontal = {true}>    
                <View>
                    <Image
                        style={styles.image} 
                        source={require('../User_icons/Sugar.jpg')}
                    />
                    <Text style= {styles.text}>Sugar</Text>
                </View>
                <View>
                    <Image
                        style={styles.image} 
                        source={require('../User_icons/Rice.jpg')}
                    />
                    <Text style= {styles.text}>Rice</Text>
                </View>
                <View>
                    <Image
                        style={styles.image} 
                        source={require('../User_icons/Wheat.jpg')}
                    />
                    <Text style= {styles.text}>Wheat</Text>
                </View>
            </ScrollView>
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
    button : {
        marginVertical: 5,
        marginHorizontal : 5,
        backgroundColor : '#123456'
    },
    text : {
        textAlign : "center"
    },
    scroll : {
        marginTop : 10
    }
})

                