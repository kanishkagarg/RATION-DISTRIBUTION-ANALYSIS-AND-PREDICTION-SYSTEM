import React,{ Component } from 'react';
import { ActivityIndicator, View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import Upper from './home_user/upper_scroll';
import { Button } from 'native-base';
import Lower from './home_user/lower_scroll';
import * as firebase from 'firebase';
import Activity from './activity';

export default class Home_user extends Component{
    
    state = {
        loading : true
    }

    componentWillMount(){
        setTimeout(() => {
            this.setState({loading : false })
        }, 3000)
    }

    logout = () => {
        try {
            firebase.auth().signOut().then(
                () => this.props.navigation.navigate('Auth')
            )
        }
        catch (error) {
            console.log(error.toString())
        }        
    }

    render(){
            if(this.state.loading){
                return <Activity />
            }else{
                return(
                    <ScrollView>
                        <Upper />
                        <Lower />
                        <Button block style = {styles.button}
                            onPress = {() => this.logout}
                        >
                            <Text style={{fontSize: 20, color: 'white'}}>SIGN OUT</Text>
                        </Button>
                    </ScrollView>
                );    
        }
    }
}

const styles = StyleSheet.create({
    button : {
        marginVertical: 5,
        marginHorizontal : 5,
        backgroundColor : '#123456'
    },
})