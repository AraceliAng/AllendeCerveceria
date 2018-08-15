import React, {Component} from 'react'
import {StyleSheet, ImageBackground, StatusBar, View, AsyncStorage} from 'react-native';
import {Container,Content,Text,Header,Left,Button,Icon,Body,Title,Right,Thumbnail,H1} from 'native-base'
import {Actions} from "react-native-router-flux";
import {ProfileForm} from "./ProfileForm";
import fondo from '../../assets/img/allende.jpg'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class ProfilePage extends Component{
    state={
        user:{}
    }

    componentWillMount(){

        this._retrieveData()
    }
    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('user');
            let user = JSON.parse(userLocal)
            if(user){
                console.log("hay usuario",user)
                this.setState({user:user})
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    render(){
        let {user}=this.state
        return(
            <View style={{flex:1}}>
                <View style={{position:'absolute',zIndex:9,marginTop:20}}>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='arrow-back' style={{color:'white'}} />
                    </Button>
                </View>

                <HeaderImageScrollView
                    maxHeight={200}
                    headerImage={fondo}
                    renderFixedForeground={() => (
                        <View style={styles.title}>
                            <Text style={styles.textito}>Mi Perfil</Text>
                        </View>
                    )}

                >
                    <Content>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <ProfileForm {...user}/>
                    </Content>
                </HeaderImageScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textito:{
        color: 'white',
        fontWeight:'bold',
        backgroundColor: 'transparent',
        fontSize: 24,
    },

})

