import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform,StatusBar, ScrollView,AsyncStorage,} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header,Button,Icon,List,ListItem,Content,Badge,Toast} from 'native-base'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import fondo from '../../assets/img/allende.jpg'
import {CardProduct} from "./CardProduct";
import {Actions} from "react-native-router-flux";
import Carrito from "./Carrito";
import {getProducts} from '../../services/ProductoServices'
import {botella, caja4} from '../../assets/DataProducts'

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

export default class CatalogoMain extends Component {

    state = {
        carrito:[],
        botella:[],
        caja4:[],
        products:[],
        showNavTitle: false,
        modalVisible: false,
        total:0
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


    addToCart=(prod)=>{

        var cant =1;
        console.log("que es?",prod)
        this.searchProd(prod,cant)

        Toast.show({
            text: "Se agregado",
            buttonText: "Okay",
            position: "bottom"
        })
    }
    removeToCart=(prod)=>{
        var cant =1;
        var precio = 880
        let {carrito}=this.state;

        var buscar = carrito.find(item => item.id === prod.id);
        console.log(buscar)
        if(undefined != buscar && buscar != null){
            //si existe agregamos uno mas a su cantidad
            buscar.cant = parseInt(buscar.cant - cant)
            buscar.tot = parseInt(precio * buscar.cant)
        }
        if(buscar.cant <= 0){

            _.remove(carrito,buscar)
            Toast.show({
                text: "Se agregado",
                buttonText: "Okay",
                position: "bottom"
            })
        }
        this.setState({carrito})
        this.getTotal()
        Toast.show({
            text: "Se fue",
            buttonText: "Okay",
            position: "bottom"
        })
    }
    //Para buscar un item en el array
    searchProd = (prod,cant) =>{
        let {carrito}=this.state;
        var precio = 880
        var buscar = carrito.find(item => item.id === prod.id);
        console.log(buscar)
       if(undefined != buscar && buscar != null){
            //si existe agregamos uno mas a su cantidad
            buscar.cant = parseInt(buscar.cant + cant)
           buscar.tot = parseInt(precio * buscar.cant)
        }else{
            // de lo contraio creamos uno nuevo
            var ob = {
                id : prod.id,
                cant : cant,
                name : prod.name,
                price : precio,
                tot: precio,
            }
            carrito.push(ob)
        }
        this.getTotal()
        this.setState({carrito})
        //console.log("buscar",buscar)
        console.log("no se si funciona",carrito);
    }

    //obtener el total
    getTotal=()=>{
        let {carrito,total}=this.state
        var tot=0
        if(undefined == carrito || null == carrito || carrito == '' || carrito.length == 0){
            console.log("No hay nada")
        }else{
            _.forEach(carrito, function(n, key) {
                tot=tot + (n.tot)
            })

        }
        this.setState({total:tot})
        console.log("total",total)

    }
    //borrar todo el carrito
    deleteCarrit=()=>{

        this.setState({carrito:[],total:0,modalVisible:false})

    }

    openCart=()=>{
        let {modalVisible}=this.state;
        modalVisible =! modalVisible
        this.setState({modalVisible})
    }

    render() {
            let {modalVisible,products,caja4,botella,carrito}=this.state;
        return (
            <View style={{ flex: 1 }}>
                <Carrito open={modalVisible}
                         close={this.openCart}
                         cart={this.state.carrito}
                         removeToCart={this.removeToCart}
                         addMore={this.addToCart}
                         total={this.state.total}
                         vaciar={this.deleteCarrit}
                />
                <View style={{position:'absolute',zIndex:9,marginTop:20}}>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='arrow-back' style={{color:'white'}} />
                    </Button>
                </View>

                <View style={{position:'absolute',zIndex:9,marginTop:20,right:0}}>

                    <Button transparent onPress={this.openCart}>
                        {carrito.length <= 0 ?
                        null
                            :
                            <Badge style={{position:'absolute',zIndex:10,top:2,right:4 ,width:20,height:'auto'}}>
                                <Text style={{fontSize:10,color:'white'}}>{carrito.length}</Text>
                            </Badge>

                        }

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
                                {botella.map((product,index)=>

                                    <View View style={{ width:200, marginLeft:20}}>
                                        <CardProduct {...product} key={index} item={product} addToCart={this.addToCart}/>
                                    </View>


                                )}
                            </ScrollView>

                            <ListItem itemDivider >
                                <Text style={styles.subTitle}>4 Pack Allende:</Text>
                            </ListItem>


                            <ScrollView  horizontal={true} style={{marginBottom:10}}>
                                {caja4.map((product,index)=>
                                    <View View style={{ width:200, marginLeft:20}}>
                                        <CardProduct {...product} key={index} item={product} addToCart={this.addToCart}/>
                                    </View>

                                )}
                            </ScrollView>
                            <ListItem itemDivider>
                                <Text style={styles.subTitle}>Caja 24 cervezas:</Text>
                            </ListItem>

                            <ScrollView  horizontal={true} style={{marginBottom:10}}>

                                {products.map((product,index)=>
                                    <View View style={{ width:200, marginLeft:20}}>
                                        <CardProduct {...product} key={index} item={product} addToCart={this.addToCart}/>
                                    </View>

                                )}

                            </ScrollView>

                        </List>
                </HeaderImageScrollView>
            </View>
        );
    }
}

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