import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, StatusBar, Text, StyleSheet, Image, Platform} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Container,Title,Col, Row, Grid} from 'native-base'
import caja from '../../assets/img/caja.jpg'


export const DetallePromociones =({promoName,image,descriptrion,promoPrice,open,close})=>(
    <Modal
        animationType="fade"
        pageSheet

        visible={open}
        onRequestClose={() => {
            alert('Modal has been closed.');
        }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={close}>
                        <Icon name='close-circle' style={{color:'black'}} />
                    </Button>
                </Left>
                <Body>
                <Title style={styles.textito}>4 cajas</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                <Image source={caja} style={{height: 200, width: null, flex: 1}}/>
                <List>
                    <ListItem style={styles.descri}>
                        <Text style={styles.textito}>Fecha: </Text>
                        <Text>10/10/18</Text>
                    </ListItem>
                    <ListItem style={styles.descri}>
                        <Text style={styles.textito}>Precio: </Text>
                        <Text>$2,600.00</Text>
                    </ListItem>
                    <ListItem style={styles.descri}>
                        <Text style={styles.textito}>Descripción: </Text>
                        <Text>Esta es una promoción unica la cual se debe de aprovechar asi que no pierdas tu tiempo en otras cosas toma tu dinero y compra esta promo</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    </Modal>
)


const styles = StyleSheet.create({

    cantTotal: {
        fontWeight:'bold',
        fontSize:20
    },
    textito: {
        color: '#d59a11',
        fontWeight: '400'
    },
    descri:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    }

});