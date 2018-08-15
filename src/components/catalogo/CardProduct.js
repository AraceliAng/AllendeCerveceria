
import React, { Component } from "react";
import { Card, CardItem, Text, Body,Button } from "native-base";
import {Actions} from "react-native-router-flux";

import {StyleSheet,Image,View} from "react-native";

export const CardProduct =({image,name,price})=>(
    <Card style={{flex:0,padding:10}}>

        <CardItem cardBody style={{flexDirection:'column'}}>
            <Image source={{uri:image}} style={{height: 120, width: 120, flex: 1}}/>


        </CardItem>
        <CardItem>
            <Body>
            <View style={styles.contentTitle}>
                <Text>${price}</Text>
                <Text note>{name}</Text>
            </View>
            </Body>
        </CardItem>
        <CardItem style={{justifyContent:'center'}}>
            <Button  bordered dark>
                <Text style={styles.textito}>Agregar</Text>
            </Button>
        </CardItem>
    </Card>
)

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

