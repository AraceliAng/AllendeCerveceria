import React, { Component } from 'react';
import {StatusBar, StyleSheet, Platform, View} from 'react-native'
import {  Container, Header,Title, Content, Button, Icon, Left, Body, Right, List, ListItem,Text,Thumbnail} from 'native-base';
import caja from '../../assets/img/caja.jpg'

import {Actions} from "react-native-router-flux";

export default class ResumenOrden extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'black'}}/>
                        </Button>
                    </Left>
                    <Body >
                    <Title style={{color:'black'}}>Resumen de orden</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                    <List>
                        <ListItem style={styles.contentTitle}>
                            <Text style={styles.title}>Promo 100 + caja </Text>
                            <Text note>Total: $1,856.00</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.subTitle}>Resumen:</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail  square size={80} source={caja} />

                            <Body>
                                <Text style={{fontSize:16}}>Caja 24 Grande</Text>
                                <Text note style={{fontSize:12, marginBottom:10}}>2 Unidades</Text>
                                <Text style={{fontSize:15}}>$1,680.00</Text>
                            </Body>

                        </ListItem>
                        <ListItem>
                            <Thumbnail  square size={80} source={caja} />

                            <Body>
                            <Text style={{fontSize:16}}>4 Pack Allende Golden Ale</Text>
                            <Text note style={{fontSize:12, marginBottom:10}}>1 Unidad</Text>
                            <Text style={{fontSize:15}}>$140.00</Text>
                            </Body>

                        </ListItem>
                        <ListItem>
                            <Thumbnail  square size={80} source={caja} />

                            <Body>
                            <Text style={{fontSize:16}}>Allende Golden Ale</Text>
                            <Text note style={{fontSize:12, marginBottom:10}}>1 Unidad</Text>
                            <Text style={{fontSize:15}}>$36.00</Text>
                            </Body>

                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.subTitle}>Método de pago</Text>
                        </ListItem>
                        <ListItem>
                                <Icon name="card" />
                            <Body>
                                <Text>Tarjeta de Crédito</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.subTitle}>Costo:</Text>
                        </ListItem>
                        <ListItem >
                            <Body>
                                <Text style={{fontSize:16,marginBottom:10}}>Subtotal:</Text>
                                <Text style={{fontSize:15,marginBottom:10}}>Descuento:</Text>
                                <Text style={{fontSize:15,marginBottom:10}}>Envío:</Text>
                                <Text style={{fontSize:15,marginBottom:10}}>Descuento de envío:</Text>
                                <Text style={{fontSize:16, fontWeight:'bold'}}>Total:</Text>
                            </Body>
                            <Body style={{alignItems:'flex-end'}}>
                            <Text style={{fontSize:16,marginBottom:10}}>$1,856.00</Text>
                            <Text style={{fontSize:15,marginBottom:10}}>$0.00</Text>
                            <Text style={{fontSize:15,marginBottom:10}}>$0.00</Text>
                            <Text style={{fontSize:15,marginBottom:10}}>$0.00</Text>
                            <Text style={{fontSize:16, fontWeight:'bold'}}>$1,856.00</Text>
                            </Body>


                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    contentTitle:{
        flexDirection:'column',
        justifyContent:'flex-start'
    }

})

