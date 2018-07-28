import React from 'react';
import {StyleSheet} from 'react-native'
import {Container,Content,Input,Button,Form,Item,Text} from 'native-base';

export const ProfileForm = ({})=>(

    <Form style={styles.container}>
        <Text style={styles.textito}>Nombre completo</Text>
        <Item regular  style={{marginBottom:20}}>
            <Input
                name="name_full"
                placeholder="Nombre completo"
                style={styles.inputs}
            />
        </Item>
        <Text style={styles.textito}>Correo electrónico</Text>
        <Item regular style={{marginBottom:20}}>
            <Input
                name="correo"
                placeholder="Correo electrónico"
                keyboardType='email-address'
                style={styles.inputs}

            />
        </Item>
        <Text style={styles.textito}>Celular</Text>
        <Item regular style={{marginBottom:20}} >
            <Input
                name="phone_cell"
                placeholder="Numero de telefono"
                eyboardType='number'
                style={styles.inputs}
            />
        </Item>
        <Text style={styles.textito}>Dirección</Text>
        <Item regular style={{marginBottom:20}}>
            <Input
                name="direcction"
                placeholder="Dirección"
                style={styles.inputs}
            />
        </Item>

        <Button full bordered dark>
            <Text>Guardar</Text>
        </Button>
    </Form>
);

const styles = StyleSheet.create({
    container:{
        padding:30
    },
    inputs:{
        fontSize:14,
        height:40,
       // backgroundColor:'rgba(255, 255, 255, 0.5)',
    },

    textito:{
        fontSize:12,
        marginBottom:20,

    },
    botoncito:{
        color:'#ebecf2'
    }

})

