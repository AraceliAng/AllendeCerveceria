import React, { Component } from 'react';
import {ImageBackground,StyleSheet,Image} from 'react-native'
import {  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import fondo from '../../assets/img/promo.jpg'
import logo from '../../assets/img/logo.png'
import  moment  from 'moment'
export const Promociones =({open,promoName,created_at})=> (

    <Card>
        <CardItem>
            <Left>
                <Thumbnail source={logo}/>
                <Body>
                <Text>{promoName}</Text>
                <Text note>¿Por qué tener una si puedes tener 10?</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image source={fondo} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
            <Left >
                <Button transparent onPress={() => open()}>
                    <Text style={styles.textito}>Más información</Text>
                </Button>
            </Left>
            <Body/>
            <Right>
                <Text style={styles.textito}>{moment(created_at).startOf('hour').fromNow()}</Text>
            </Right>
        </CardItem>
    </Card>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ebecf2'
    },
    textito:{

        color:'black'
    },

})

