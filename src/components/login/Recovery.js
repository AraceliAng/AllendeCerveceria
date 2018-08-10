import React, {Component} from 'react';
import {View,Text,ImageBackground,StyleSheet} from 'react-native';
import {Container,Content,H2,H3,Header,Left,Body,Right,Title,Button,Icon,Item,Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgFondo from '../../assets/img/allende.jpg'


export default class Recovery extends Component <Props>{
    render(){
        return(
            <ImageBackground source={imgFondo} style={styles.img}>
                <Header transparent>
                    <Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>

                <View style={styles.container}>

                    <View style={styles.title}>
                        <H2 style={styles.textito}>
                            ¿No recuderdas tu contraseña?
                        </H2>
                        <H3 style={styles.textito}>
                            Ingresa tu correo electrónico para que te podamos restablecer tu contraseña
                        </H3>
                    </View>
                    <Item regular style={styles.inputs} >
                        <Input
                            name="correo"
                            placeholder="Correo electrónico"
                            keyboardType='email-address'
                            style={{color:'black'}}

                        />
                    </Item>
                    <Button full bordered light style={styles.inputs}>
                        <Text>Enviar</Text>
                    </Button>


                </View>

            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        height: null,
        width: null,
        opacity:0.85
    },
    title:{
        justifyContent:'space-around',
        alignItems:'center'
    },
    textito:{
        color:'white',
        marginBottom:10,
    },
    container:{
        flex:2,
        padding:20,
        justifyContent:'space-between'

    },
    inputs:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        marginBottom:20,
        borderRadius:10
    },
});

