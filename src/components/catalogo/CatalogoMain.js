import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform,StatusBar, ScrollView,AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header,Button,Icon,List,ListItem,Content} from 'native-base'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import fondo from '../../assets/img/allende.jpg'
import {CardProduct} from "./CardProduct";
import {Actions} from "react-native-router-flux";
import Carrito from "./Carrito";
import {getProducts} from '../../services/ProductoServices'
import {botella, caja4} from '../../assets/DataProducts'


export default class CatalogoMain extends Component {

    state = {
        botella:[],
        caja4:[],
        products:[],
        showNavTitle: false,
        modalVisible: false,
    }

    componentWillMount(){
        this.setState({caja4:caja4,botella:botella})

        getProducts()
            .then(r=>{
                this.setState({products:r})

            }).catch(e=>{
            console.log(e)
        })

    }

    openCart=()=>{
        let {modalVisible}=this.state;
        modalVisible =! modalVisible
        this.setState({modalVisible})
    }

    render() {
            let {modalVisible,products,caja4,botella}=this.state;
            console.log('botella',botella)
        return (
            <View style={{ flex: 1 }}>
                <Carrito open={modalVisible} close={this.openCart}/>
                <View style={{position:'absolute',zIndex:9,marginTop:20}}>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='arrow-back' style={{color:'white'}} />
                    </Button>
                </View>
                <View style={{position:'absolute',zIndex:9,marginTop:20,right:0}}>
                    <Button transparent onPress={this.openCart}>
                        <Icon name='cart' style={{color:'white'}} />
                    </Button>
                </View>

                <StatusBar backgroundColor="black" barStyle="light-content" />
                <HeaderImageScrollView
                    maxHeight={MAX_HEIGHT}
                    minHeight={MIN_HEIGHT}
                    minOverlayOpacity={0.3}
                    fadeOutForeground
                    headerImage={fondo}
                    renderFixedForeground={() => (
                        <Animatable.View
                            style={styles.navTitleView}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                            <Text style={styles.imageTitle}>
                                Catálogo
                            </Text>
                        </Animatable.View>
                    )}
                    renderForeground={() => (
                        <View style={styles.titleContainer}>
                            <Text style={styles.imageTitle}>Catálogo</Text>
                        </View>
                    )}
                >
                    <TriggeringView
                        style={styles.section}
                        onHide={() => this.navTitleView.fadeInUp(150)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                        <List>
                            <ListItem itemDivider>
                                <Text style={styles.subTitle}>Cerveza:</Text>
                            </ListItem>
                        </List>

                    </TriggeringView>

                        <List>
                            <ScrollView  horizontal={true} style={{marginBottom:10}}>
                                {botella.map((product,key)=>
                                    <View View style={{ width:200, marginLeft:20}}>
                                        <CardProduct {...product} key={key}/>
                                    </View>

                                )}
                            </ScrollView>

                            <ListItem itemDivider >
                                <Text style={styles.subTitle}>4 Pack Allende:</Text>
                            </ListItem>


                            <ScrollView  horizontal={true} style={{marginBottom:10}}>
                                {caja4.map((product,key)=>
                                    <View View style={{ width:200, marginLeft:20}}>
                                        <CardProduct {...product} key={key}/>
                                    </View>

                                )}
                            </ScrollView>
                            <ListItem itemDivider>
                                <Text style={styles.subTitle}>Caja 24 cervezas:</Text>
                            </ListItem>

                            <ScrollView  horizontal={true} style={{marginBottom:10}}>

                                {products.map((product,key)=>
                                    <View View style={{ width:200, marginLeft:20}}>
                                        <CardProduct {...product} key={key}/>
                                    </View>

                                )}

                            </ScrollView>

                        </List>
                </HeaderImageScrollView>
            </View>
        );
    }
}
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

const styles = StyleSheet.create({

    section: {

    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        top:14,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    subTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
});