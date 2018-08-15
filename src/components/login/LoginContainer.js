import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground, StatusBar, AsyncStorage} from 'react-native';
import {Toast } from "native-base";
import {LoginForm} from './LoginForm'
import {logIn} from "../../services/AuthService"
import {Actions} from 'react-native-router-flux'

type Props ={};


export default class LoginContainer extends Component <Props>{
    state={
        login:{
            email:"",
            password:""
        },
        buttonD:true
    }
    componentWillMount(){

        this._retrieveData()
    }
    _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            if(token){
                console.log("hay usuario",token)
                Actions.main();
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    login=()=>{
       // Actions.main()
        let {login,buttonD} = this.state;
       if(login.email.length == 0){

           console.log("no se puede",login)
       }else{
           logIn(login)
               .then(r => {
                   Actions.main()
                   Toast.show({
                       text: "Bienvenido!",
                       position: "top",
                       type: "success"
                   })
                   console.log("si se pudo")
               })
               .catch(error => {
                   Toast.show({
                       text: "Error!",
                       position: "top",
                       type: "danger"
                   })
                   console.log(error);
               })
       }



        // console.log("Datos",this.state.login)
    }
    handleChange = (field, value) => {
        let {login} = this.state;
        login[field] = value;
        this.setState({login});

    };

    render(){
        return(
            <ImageBackground source={require('../../assets/img/chelas.jpg')} style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content" />

                <View style={styles.logoContainer}>
                    <Text style={styles.title}>Cerveza, Artesanal, Mexicana</Text>
                </View>

                    <LoginForm onChange={this.handleChange} onSubmit={this.login} />
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

/*
 _retrieveData = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            let newUser = JSON.parse(user)
            if(newUser){
                console.log("hay usuario",newUser)
                Actions.main();
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            // Error retrieving data
        }
    }

 */