import React from 'react';
import {StyleSheet} from 'react-native'
import {Container,Content,Input,Button,Form,Item,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoginForm = ({onChange,onSubmit,buttonD})=>(

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
                <Button full bordered light onPress={onSubmit} style={{borderRadius:10}}>
                    <Text>Entrar</Text>
                </Button>
            </Form>
);

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    inputs:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        marginBottom:20,
        borderRadius:10
    },
    textito:{

    },
    botoncito:{
        color:'#ebecf2'
    }

})

