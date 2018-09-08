
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import {Header, Body, Left, Right, Icon, Title, Button, Toast} from 'native-base'
import Camera from 'react-native-camera';
import {Actions} from 'react-native-router-flux';

export default class ReaderQr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrcode: ''
        }
    }

    onBarCodeRead = (e) =>{
        console.log("que es esto",e)
        let datos = JSON.parse(e.data)
        if(datos.orden){
            Actions.resumen()
        }else if(datos.dist){
            Toast.show({
                    text: "Si te puedo vender!",
                position: "bottom",
                style: { bottom: "50%" },
                    type: "success"
                })

        }else{
                Toast.show({
                    text: "No te puedo vender",
                    position: "bottom",
                    style: { bottom: "50%" },
                    type: "danger"})
        }




    };
    render() {
        return (
            <View style={styles.container}>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'black'}} />
                        </Button>
                    </Left>
                    <Body >
                    <Title style={{color:'black'}}>Lector</Title>
                    </Body>
                    <Right/>
                </Header>
                <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                >

                </Camera>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    preview: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    capture: {
        height:200,
        width:200,
    },

});
