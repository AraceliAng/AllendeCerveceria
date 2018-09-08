import React, { Component } from 'react';
import { StyleSheet, Text, View,Alert, StatusBar,Picker } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header,Button,Icon,List,ListItem,Body,Right,Left,Content} from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import fondo from '../../assets/img/allende.jpg'
import {Actions} from "react-native-router-flux";
import openMap from 'react-native-open-maps';
import {Datadistri} from '../../assets/DataDistri'

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

const styles = StyleSheet.create({

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

export default class Contactanos extends Component {
    constructor() {
        super();
        this.state = { showNavTitle: false,language:'Selecciona',dist:[],searchText:'' };
    }
    componentWillMount(){

        this.setState({dist:Datadistri})



    }
    goToAllende() {
        openMap({ latitude: 20.915978, longitude: -100.765236 });
    }

    llamame=()=>{

        const message = '+52 (55) 5292 1154';
        Alert.alert(
            '¿Tienes alguna duda?',
            message,
            [
                {
                    text: 'Llamar',
                    onPress:null
                },
                {
                    text: 'Cancelar',
                    onPress: null
                }
            ]
        )
    }

    search=(e)=>{
        this.setState({searchText:e})
        console.log(e)
    }

    render() {
        let data = [{
            value: 'Aguascalientes',
        }, {
            value: 'Baja California',
        }, {
            value: 'Baja California Sur',
        },{
            value: 'Campeche',
        },{
            value: 'Chiapas',
        },{
            value: 'Chihuahua',
        },{
            value: 'Ciudad de México',
        },{
            value: 'Coahuila de Zaragoza',
        },{
            value: 'Colima',
        },{
            value: 'Durango',
        },{
            value: 'Guanajuato',
        },{
            value: 'Guerrero',
        },{
            value: 'Hidalgo',
        },{
            value: 'Jalisco',
        },{
            value: 'México',
        },{
            value: 'Michoacán de Ocampo',
        },{
            value: 'Morelos',
        },{
            value: 'Nayarit',
        },{
            value: 'Nuevo León',
        },{
            value: 'Oaxaca',
        },{
            value: 'Puebla',
        },{
            value: 'Querétaro de Arteaga',
        },{
            value: 'Quintana Roo',
        },{
            value: 'San Luis Potosí',
        },{
            value: 'Sinaloa',
        },{
            value: 'Sonora',
        },{
            value: 'Tabasco',
        },{
            value: 'Tamaulipas',
        },{
            value: 'Tlaxcala',
        },{
            value: 'Veracruz',
        },{
            value: 'Yucatán',
        },{
            value: 'Zacatecas',
        },{
            value: 'Otros',
        }];

        let {dist,searchText}=this.state;
        console.log("hay datos:",searchText)
        let searchFilter =dist.filter(
            (distri)=>{
                return distri.direccion.toLowerCase().indexOf(
                    searchText.toLowerCase()
                ) !==-1;
            }
        );
        let text=this.state.searchText;
        return (
            <View style={{ flex: 1 }}>
                <View style={{position:'absolute',zIndex:9,marginTop:20}}>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='arrow-back' style={{color:'white'}} />
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
                                Contáctanos
                            </Text>
                        </Animatable.View>
                    )}
                    renderForeground={() => (
                        <View style={styles.titleContainer}>
                            <Text style={styles.imageTitle}>Contáctanos</Text>
                        </View>
                    )}
                >
                    <TriggeringView
                        style={styles.section}
                        onHide={() => this.navTitleView.fadeInUp(150)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                        <Dropdown
                            label='¿De donde eres?'
                            data={data}
                            onChangeText={this.search}
                        />


                    </TriggeringView>

                    <List>
                        {searchText == '' ? <ListItem itemDivider>
                                <Text style={styles.subTitle}>Encuentra a tu distribuidor mas cercano </Text>
                            </ListItem> :
                            [(
                            searchFilter.length  <= 0 ?
                                <ListItem itemDivider>
                                    <Text style={styles.subTitle}>No tenemos distribuidores en {text}</Text>
                                </ListItem> :
                                searchFilter.map((data, i)=>
                                    <ListItem avatar key={i}>

                                        <Body >
                                        <View style={{alignItems:'center'}}><Text>{data.name}</Text></View>

                                        <Text note>Direccion: {data.direccion} </Text>
                                        <Text note>Telefono: {data.phone} </Text>
                                        <Text note>Email:{data.email} </Text>
                                        </Body>

                                    </ListItem>
                                )
                            )]

                        }

                    </List>
                </HeaderImageScrollView>
            </View>
        );
    }
}
