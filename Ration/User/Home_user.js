import React,{ Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import Upper from './home_user/upper_scroll';
import Lower from './home_user/lower_scroll';


export default class Home_user extends Component{
    render(){
        return (
            <ScrollView>
                <Upper />
                <Lower />
            </ScrollView>
        );
    }
}

