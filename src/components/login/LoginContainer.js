import React, {Component} from 'react'
import {StyleSheet, Image, View,Text,TouchableOpacity,ImageBackground} from 'react-native';
import {LoginForm} from './LoginForm'
import Video from 'react-native-video'
import {Actions} from 'react-native-router-flux'

type Props ={};


export default class LoginContainer extends Component <Props>{


    login=()=>{
        Actions.main()
    }
    render(){
        return(
            <ImageBackground source={require('../../assets/img/chelas.jpg')} style={styles.container}>

                <View style={styles.logoContainer}>
                    <Text style={styles.title}>Cerveza, Artesanal, Mexicana</Text>
                </View>

                    <LoginForm login={this.login}/>
                <View style={styles.textos}>
                    <TouchableOpacity onPress={()=>Actions.recovery()}>
                        <Text style={styles.textito}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ebecf2'
    },
    logoContainer:{
        paddingTop:100,
        alignItems:'center',
       flex:3,
        justifyContent:'flex-start'
    },
    logo:{
        width:200,
        height:200
    },
    title:{
        color:'#fff',
        fontSize:25,
        fontFamily:'Arial'
    },
    textito:{
        color:'white',
        fontSize:16,

    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right:0,
        opacity:0.8

    },
    textos:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    }

})

