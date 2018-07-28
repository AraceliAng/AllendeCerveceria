
import React, { Component } from "react";
import { Card, CardItem, Text, Body,Button } from "native-base";
import {Actions} from "react-native-router-flux";
import cerveza from '../../assets/img/cerveza1.jpg'
import {StyleSheet,Image,View} from "react-native";
export default class CardProduct extends Component {
    render() {
        return (
            <Card style={{flex:0,padding:10}}>

                <CardItem cardBody style={{flexDirection:'column'}}>
                    <Image source={cerveza} style={{height: 120, width: 120, flex: 1}}/>
                    <View>
                        <Text>$37.00</Text>
                        <Text note>Cerveza Agave Lager</Text>
                        <Text note>355 mL</Text>
                    </View>

                </CardItem>
                <CardItem style={{justifyContent:'center'}}>
                    <Button  bordered dark>
                        <Text style={styles.textito}>Agregar</Text>
                    </Button>
                </CardItem>
            </Card>
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

