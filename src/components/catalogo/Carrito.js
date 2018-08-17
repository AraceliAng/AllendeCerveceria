import React, {Component} from 'react';
import {Modal, TouchableOpacity, View,StatusBar,Text,StyleSheet} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Thumbnail,Card,CardItem} from 'native-base'
import caja from '../../assets/img/caja.jpg'


export const Carrito =({cart,addMore,removeToCart, total,vaciar,open,close,createOrden})=>(

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={open}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={close}>
                            <Header transparent style={{backgroundColor:"rgba(0,0,0,0.2)"}} >
                                <Left />
                                <Body/>
                                <Right>
                                    <Button transparent onPress={close}>
                                        <Icon name='close-circle' style={{color:'white'}} />
                                    </Button>
                                </Right>
                            </Header>
                        </TouchableOpacity>

                        <StatusBar backgroundColor="black" barStyle="light-content" />{}

                        <List style={{backgroundColor:'white'}}>
                            <ListItem itemHeader first>
                                <Body>
                                <Text note>Total: </Text>
                                <Text style={styles.cantTotal}>${total}</Text>
                                </Body>
                            </ListItem>
                        </List>
                        <Content style={{backgroundColor:'white',flex:3}}>
                            {
                                cart.length > 0 ?
                                    <View>
                                        <List>
                                            {cart.map((chelas, i)=>
                                                <ListItem thumbnail  key={i}>
                                                    <Left>
                                                        <Thumbnail square source={caja} />
                                                    </Left>
                                                    <Body>
                                                    <Text style={styles.subTitle}>Allende {chelas.name}</Text>
                                                    <Text note>Caja 24 cervezas</Text>
                                                    <Text >Precio uni: ${chelas.price}</Text>
                                                    <Text note>Total x cant: ${chelas.tot}</Text>
                                                    </Body>
                                                    <Right>
                                                        <Card style={styles.boton}>

                                                            <TouchableOpacity style={{marginRight:10}} onPress={()=>removeToCart(chelas)}><Text>-</Text></TouchableOpacity>
                                                            <Text>{chelas.cant}</Text>
                                                            <TouchableOpacity style={{marginLeft:10}} onPress={()=>addMore(chelas)}><Text>+</Text></TouchableOpacity>

                                                        </Card>

                                                    </Right>
                                                </ListItem>
                                            )}
                                        </List>


                                        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                                            <TouchableOpacity onPress={vaciar}>
                                                <Text style={styles.textito}>Vaciar orden</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                :


                                    <Card transparent style={{padding:20,top:50}}>
                                        <CardItem>
                                            <Body style={{justifyContent:'center',alignItems:'center'}}>
                                            <Text note >
                                                Tu carrito está vacio.
                                            </Text>
                                            <Text note>
                                                Regresa al catálogo para agregar productos.
                                            </Text>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                }




                        </Content>
                        { cart.length > 0 ?

                            <View style={{backgroundColor:'white', padding:15}}>
                                <Button  bordered block style={{borderColor:'#d59a12'}} onPress={createOrden} >
                                    <Text style={{color:'#d59a12'}}>Agendar orden</Text>
                                </Button>
                            </View>

                            :
                            null
                        }



                    </View>
                </Modal>
        )


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