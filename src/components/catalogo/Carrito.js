import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Thumbnail,Card} from 'native-base'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import fondo from '../../assets/img/allende.jpg'
import CardProduct from "./CardProduct";
import caja from '../../assets/img/caja.jpg'
export default class Carrito extends Component {


    render() {
        return (

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.open}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight onPress={this.props.close}>
                            <Header transparent style={{backgroundColor:"rgba(0,0,0,0.2)"}} >
                                <Left />
                                <Body/>
                                <Right>
                                    <Button transparent onPress={this.props.close}>
                                        <Icon name='close-circle' style={{color:'white'}} />
                                    </Button>
                                </Right>
                            </Header>
                        </TouchableHighlight>

                        <StatusBar backgroundColor="black" barStyle="light-content" />

                        <List style={{backgroundColor:'white'}}>
                            <ListItem itemHeader first>
                                <Body>
                                <Text note>Total: </Text>
                                <Text style={styles.cantTotal}>$40.00</Text>
                                </Body>
                            </ListItem>
                        </List>
                        <Content style={{backgroundColor:'white',flex:3}}>
                            <List>
                                {[0,1,2,3].map((chelas, i)=>
                                <ListItem thumbnail  key={i}>
                                    <Left>
                                        <Thumbnail square source={caja} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.subTitle}>Allende AGAVE LAGER</Text>
                                        <Text note>355 mL</Text>
                                        <Text >$37.00</Text>
                                    </Body>
                                    <Right>
                                        <Card style={styles.boton}>

                                            <TouchableHighlight style={{marginRight:10}}><Text>-</Text></TouchableHighlight>
                                            <Text>1</Text>
                                            <TouchableHighlight style={{marginLeft:10}}><Text>+</Text></TouchableHighlight>

                                        </Card>

                                    </Right>
                                </ListItem>
                                )}
                            </List>


                            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <TouchableHighlight>
                                    <Text style={styles.textito}>Vaciar orden</Text>
                                </TouchableHighlight>
                            </View>



                        </Content>
                        <View style={{backgroundColor:'white', padding:15}}>
                            <Button  bordered dark block>
                                <Text>Agendar orden</Text>
                            </Button>
                        </View>


                    </View>
                </Modal>
        );
    }
}


const styles = StyleSheet.create({

    cantTotal: {
        fontWeight:'bold',
        fontSize:20
    },
    subTitle:{
        fontWeight:'bold'
    },
    boton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10

    },
    textito:{
        fontSize:12,
        textDecorationLine:'underline'
    }
});