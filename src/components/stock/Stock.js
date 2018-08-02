import React, { Component } from 'react';
import {ImageBackground,StyleSheet,Image,View,StatusBar,Platform} from 'react-native'
import { ListItem,List, Container, Header,Title, Content, Card, CardItem, Thumbnail, Text,H1, Button, Icon, Left, Body, Right,Badge } from 'native-base';
import fondo from '../../assets/img/allende.jpg'
import logo from '../../assets/img/logo.png'
import caja from '../../assets/img/caja.jpg'
import paquete from '../../assets/img/caja4.jpg'
import cerveza from '../../assets/img/cerveza1.jpg'
import {Actions} from "react-native-router-flux";

export default class Stock extends Component {
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
                    <Title style={{color:'black'}}>Stock</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={{padding:20}}>
                    <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                    <List>

                        <ListItem itemDivider  style={styles.encabezado} >
                            <Text >Cerveza</Text>
                            <Text>Total: 100 </Text>
                        </ListItem>
                        {[0,1,2,3].map((data, i )=>
                            <ListItem thumbnail key={i}>
                                <Left>
                                    <Thumbnail square source={caja} />
                                </Left>
                                <Body>
                                <Text>Chelitas</Text>
                                <Text> </Text>
                                </Body>
                                <Right>
                                    <Text note>Cantidad:</Text>
                                    <Text>24</Text>
                                </Right>
                            </ListItem>

                        )
                        }

                        <ListItem itemDivider style={styles.encabezado} >
                            <Text style={styles.subTitle}>4 pack Allende</Text>
                            <Text>Total: 100 </Text>
                        </ListItem>

                        {[0,1,2,3].map((data, i )=>
                            <ListItem thumbnail key={i}>
                                <Left>
                                    <Thumbnail square source={caja} />
                                </Left>
                                <Body>
                                <Text>Chelitas</Text>
                                <Text> </Text>
                                </Body>
                                <Right>
                                    <Text note>Cantidad:</Text>
                                    <Text>24</Text>
                                </Right>
                            </ListItem>

                        )
                        }

                        <ListItem itemDivider  style={styles.encabezado}>
                            <Text style={styles.subTitle}>Caja 24 cervezas</Text>
                            <Text>Total: 100 </Text>
                        </ListItem>

                        {[0,1,2,3].map((data, i )=>
                            <ListItem thumbnail key={i}>
                                <Left>
                                    <Thumbnail square source={caja} />
                                </Left>
                                <Body>
                                <Text>Chelitas</Text>
                                <Text> </Text>
                                </Body>
                                <Right>
                                    <Text note>Cantidad:</Text>
                                    <Text>24</Text>
                                </Right>
                            </ListItem>

                        )
                        }


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
    encabezado:{
        justifyContent:'space-between'
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