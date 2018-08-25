import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, StatusBar, Text, StyleSheet, Image, Platform} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Container,Title} from 'native-base'
import caja from '../../assets/img/caja.jpg'


export const DetalleCerveza =({name,fermentacion,alc,IBUS,color,aroma,sabor,tiempo,temperatura,maridaje,open,close})=>(
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
                        <Title style={styles.textito}>{name}</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                    <Image source={caja} style={{height: 200, width: null, flex: 1}}/>
                    <List>
                        <ListItem itemDivider>
                            <Text style={styles.textito}>Fermentación: </Text>
                            <Text>{fermentacion}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.textito}>Alc. Vol.: </Text>
                            <Text>{alc}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.textito}>IBUS: </Text>
                            <Text>{IBUS}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.textito}>Color: </Text>
                            <Text>{color}</Text>
                        </ListItem>
                        <ListItem itemDivider style={{flexDirection:'column',justifyContent:"flex-start", alignItems:"flex-start"}}>
                            <Text style={styles.textito}>Sabor: </Text>
                            <Body>
                            <Text>{sabor}</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider style={{flexDirection:'column',justifyContent:"flex-start", alignItems:"flex-start"}}>
                            <Text style={styles.textito}>Aroma: </Text>
                            <Body>
                            <Text>{aroma}</Text>
                            </Body>

                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.textito}>Tiempo de elaboración: </Text>
                            <Text>{tiempo}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.textito}>Temperatura Recomendada: </Text>
                            <Text>{temperatura}</Text>
                        </ListItem>
                        <ListItem itemDivider style={{flexDirection:'column',justifyContent:"flex-start", alignItems:"flex-start"}}>
                            <Text style={styles.textito}>Maridaje:</Text>
                            <Text>{maridaje}</Text>
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
    textito:{
        color: '#d59a11',
        fontWeight: '400'
    }
});