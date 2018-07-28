import React, { Component } from 'react';
import { StyleSheet, Text, View,Alert, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header,Button,Icon,List,ListItem,Body,Right,Left,Content} from 'native-base'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import fondo from '../../assets/img/allende.jpg'
import {Actions} from "react-native-router-flux";

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

export default class Contactanos extends Component {
    constructor() {
        super();
        this.state = { showNavTitle: false };
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

    render() {
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
                        <List>
                            <ListItem itemDivider>
                                <Text style={styles.subTitle}>Teléfono:</Text>
                            </ListItem>
                        </List>

                    </TriggeringView>
                    <List>

                        <ListItem icon onPress={this.llamame}>
                            <Left>
                                <Icon name="card" />
                            </Left>
                            <Body>
                            <Text>+52 (55) 5292 1154</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                        <ListItem itemDivider >
                            <Text style={styles.subTitle}>Email:</Text>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="mail" />
                            </Left>

                            <Body>
                            <Text>info@cerveceriaallende.com</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                    </List>
                </HeaderImageScrollView>
            </View>
        );
    }
}
