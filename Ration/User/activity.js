import React,  { Component } from 'react';
import { ActivityIndicator, View, Text, StyleSheet} from 'react-native';

export default class Indicator extends Component{
    render(){
        return(
            <View>
                <ActivityIndicator
                    size = {50} 
                    color = '#123456'
                    style = {{
                        flex : 1,
                        alignItems : "center",
                        marginVertical : 330
                    }}
                />
            </View>
        );
    }
}
