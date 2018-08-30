import React from 'react';
import {StyleSheet,KeyboardAvoidingView} from 'react-native'
import {Container,Content,Input,Button,Form,Item,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoginForm = ({onChange})=>(


        <KeyboardAvoidingView
            behavior="padding"
        >
            <Form style={styles.container}>
                <Item regular style={styles.inputs}>
                    <Icon active name='user' size={15}  style={{marginLeft:12}} />
                    <Input
                        name="email"
                        placeholder="Correo electrónico"
                        keyboardType='email-address'
                        style={styles.textito}
                        onChangeText={value=>onChange("email",value)}
                    />
                </Item>
                <Item regular style={styles.inputs}>
                    <Icon active name='unlock-alt' size={15}  style={{marginLeft:12}} />
                    <Input
                        name="password"
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        style={styles.textito}
                        onChangeText={value=>onChange("password",value)}
                    />
                </Item>

            </Form>
        </KeyboardAvoidingView>

);

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    inputs:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        marginBottom:10,
        borderRadius:10
    },
    textito:{

    },
    botoncito:{
        color:'#ebecf2'
    }

})

