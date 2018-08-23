import React, { Component } from 'react';
import {ImageBackground,StyleSheet,Image,View,StatusBar,Platform} from 'react-native'
import { ListItem,List, Container, Header,Title, Content, Card, CardItem, Thumbnail, Text,H1, Button, Icon, Left, Body, Right,Badge } from 'native-base';
import fondo from '../../assets/img/allende.jpg'
import logo from '../../assets/img/logo.png'
import caja from '../../assets/img/caja.jpg'
import {Actions} from "react-native-router-flux";

export default class OrdenActiva extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'black'}} />
                        </Button>
                    </Left>
                    <Body >
                    <Title style={{color:'black'}}>Orden Activa</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={{padding:20}}>
                    <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                    <List>
                        {[0,1,2,3].map((data, i) =>
                            <View key={i}>
                                <ListItem itemDivider style={{justifyContent:'space-between'}} >
                                    <Text >Allende GOLDEN ALE</Text>
                                    <Text style={{backgroundColor:'green', color:'white',width:80,textAlign:'center'}}>Activa</Text>
                                </ListItem>
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={caja} />
                                    </Left>
                                    <Body>
                                    <Text>Chelitas</Text>
                                    <Text>Cant:24 cajas</Text>
                                    <Text>$1450.00</Text>
                                    <Text>Fecha: 24/05/15</Text>
                                    </Body>
                                    <Right>
                                        <Text>Ver</Text>
                                    </Right>
                                </ListItem>
                            </View>
                        )}


                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ebecf2'
    },

    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    textito:{
        fontSize:12,
    },
    imagencitas:{
        marginRight:10
    },
    contentTitle:{
        flexDirection:'column',
        alignItems:'flex-start',
        marginBottom:10,
    }

})