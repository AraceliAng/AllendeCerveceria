import React, { Component } from 'react';
import {StatusBar, StyleSheet, Platform, View} from 'react-native'
import {  Container, Header,Title, Content, Button, Icon, Left, Body, Right, List, ListItem,Text,Thumbnail} from 'native-base';

import {Actions} from "react-native-router-flux";
import {ResumenComponent} from "./ResumenComponent";

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
                    <Body/>
                    <Right/>
                </Header>
                <Content>
                    <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                    <ResumenComponent/>
                </Content>
            </Container>
        );
    }
}

