import React, { Component } from 'react';
import {ImageBackground,StyleSheet,Image} from 'react-native'
import {  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import fondo from '../../assets/img/promo.jpg'
import logo from '../../assets/img/logo.png'

export default class Promociones extends Component {
    render() {
        return (
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                <Text>Pack Mundialista</Text>
                                <Text note>¿Por qué tener una si puedes tener 10?</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={fondo} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Más información</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ebecf2'
    }

})

