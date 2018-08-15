import React, { Component } from 'react';
import {ImageBackground,StyleSheet,Image,View,StatusBar,Platform} from 'react-native'
import {  Container, Header,Title, Content, Card, CardItem, Thumbnail, Text,H1, Button, Icon, Left, Body, Right,Badge } from 'native-base';
import fondo from '../../assets/img/allende.jpg'
import logo from '../../assets/img/logo.png'
import caja from '../../assets/img/caja.jpg'
import {Actions} from "react-native-router-flux";

export default class HistorialMain extends Component {
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
                    <Title style={{color:'black'}}>Historial</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={{padding:20}}>
                    <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                    <Card style={{padding:10}}>
                        <CardItem style={styles.contentTitle}>
                            <Text style={styles.title}>Promo 100 + caja</Text>
                            <Text note>JUEVES, 5 JUL - TOTAL: $1,856.00</Text>
                        </CardItem>
                        <CardItem cardBody style={{justifyContent:'flex-start',padding:20, height:80}}>
                            <View>
                                <Thumbnail square source={caja}  style={styles.imagencitas}/>
                                <Badge style={{top:-10,right:0,position:'absolute',zIndex:9}}>
                                    <Text>2</Text>
                                </Badge>
                            </View>
                            <Thumbnail square source={paquete} style={styles.imagencitas}/>
                            <Thumbnail square source={cerveza} style={styles.imagencitas}/>

                        </CardItem>
                        <CardItem style={{justifyContent:'flex-end'}}>
                            <Button  bordered dark onPress={()=>Actions.resumen()}>
                                <Text style={styles.textito}>Ver resumen</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card style={{padding:10}}>
                        <CardItem style={styles.contentTitle}>
                            <Text style={styles.title}>Pack Allende + cajas</Text>
                            <Text note>Viernes, 10 Enero - TOTAL: $2,500.00</Text>
                        </CardItem>
                        <CardItem cardBody style={{justifyContent:'flex-start',padding:20, height:80}}>

                            <Thumbnail square source={caja}  style={styles.imagencitas}/>
                            <View>
                                <Thumbnail square source={caja} style={styles.imagencitas}/>
                                <Badge style={{top:-10,right:0,position:'absolute',zIndex:9}}>
                                    <Text>2</Text>
                                </Badge>
                            </View>
                            <Thumbnail square source={caja} style={styles.imagencitas}/>

                        </CardItem>
                        <CardItem style={{justifyContent:'flex-end'}}>
                            <Button bordered dark>
                                <Text style={styles.textito}>Ver resumen</Text>
                            </Button>
                        </CardItem>
                    </Card>
                    <Card style={{padding:10}}>
                        <CardItem style={styles.contentTitle}>
                            <Text style={styles.title}>Pack Carton + Cerveza</Text>
                            <Text note>Viernes, 10 Enero - TOTAL: $2,500.00</Text>
                        </CardItem>
                        <CardItem cardBody style={{justifyContent:'flex-start',padding:20, height:80}}>

                            <Thumbnail square source={caja}  style={styles.imagencitas}/>
                            <View>
                                <Thumbnail square source={cerveza} style={styles.imagencitas}/>
                                <Badge style={{top:-10,right:0,position:'absolute',zIndex:9}}>
                                    <Text>2</Text>
                                </Badge>
                            </View>
                        </CardItem>
                        <CardItem style={{justifyContent:'flex-end'}}>
                            <Button bordered dark>
                                <Text style={styles.textito}>Ver resumen</Text>
                            </Button>
                        </CardItem>
                    </Card>

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

