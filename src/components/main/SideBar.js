import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Body,Title,Left,Thumbnail,Right,Button,Icon } from 'native-base';
import logo from'../../assets/img/logoallende.png';
import {Actions} from 'react-native-router-flux'
export default class ListHeaderExample extends Component {
    state={
        miTienda:false,
        admin:false,
        contacto:false,
        inventario:false,
    }

    tienda=()=>{
        let {miTienda}=this.state;
        miTienda =! miTienda

        this.setState({miTienda ,admin:false,contacto:false,inventario:false})
    }
    admin=()=>{
        let {admin}=this.state;
        admin =! admin

        this.setState({admin,miTienda:false,contacto:false,inventario:false})
    }
    contacto=()=>{
        let {contacto}=this.state;
        contacto =! contacto

        this.setState({contacto,admin:false,miTienda:false,inventario:false})
    }
    invent=()=>{
        let {inventario}=this.state;
        inventario =! inventario

        this.setState({inventario,contacto:false,admin:false,miTienda:false})
    }

    render() {

        let {miTienda,admin,contacto,inventario}=this.state;
        return (
            <Container style={{backgroundColor:"rgba(0,0,0,0.8)",flex:1}}>

                    <Header transparent style={{marginBottom:20}}>
                        <Left>
                            <Thumbnail source={logo}/>
                        </Left>
                        <Body>
                            <Title style={styles.title}>Cervecería</Title>
                        </Body>
                        <Right/>
                    </Header>
                <Content>
                        <ListItem icon onPress={this.tienda}>
                            <Left>
                                <Icon name="cart" style={{color:'white'}}/>
                            </Left>
                            <Body>
                                <Text style={{color:'white'}}>Mi tienda</Text>
                            </Body>
                            <Right>
                                <Icon name={miTienda ? "arrow-up":"arrow-down"} />
                            </Right>
                        </ListItem>
                        {miTienda ?
                            <View style={{backgroundColor:"#555555"}} >
                                <ListItem onPress={()=>Actions.catalogo()}  >
                                    <Text style={{color:'white'}}>Catálogo</Text>
                                </ListItem>

                            </View>
                            : null}
                    <ListItem icon onPress={this.admin}>
                        <Left>
                            <Icon name="paper" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Administración</Text>
                        </Body>
                        <Right>
                            <Icon name={admin ? "arrow-up":"arrow-down"} />
                        </Right>
                    </ListItem>
                    {admin ?
                        <View style={{backgroundColor:"#555555"}}>
                            <ListItem onPress={()=>Actions.profile()} >
                                <Text style={{color:'white'}}>Mi perfil</Text>
                            </ListItem>
                            <ListItem onPress={()=>Actions.ordenA()}>
                                <Text style={{color:'white'}}>Ordenes activas</Text>
                            </ListItem>
                            <ListItem onPress={()=>Actions.historial()} >
                                <Text style={{color:'white'}}>Historial</Text>
                            </ListItem>
                        </View>
                        :null
                    }
                    <ListItem icon onPress={this.invent}>
                        <Left>
                            <Icon name="camera" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Invetario</Text>
                        </Body>
                        <Right>
                            <Icon name={inventario ? "arrow-up":"arrow-down"} />
                        </Right>
                    </ListItem>
                    {inventario ?
                        <View style={{backgroundColor:"#555555"}}>
                            <ListItem >
                                <Text style={{color:'white'}}>Scanner</Text>
                            </ListItem>
                            <ListItem >
                                <Text style={{color:'white'}}>Stock</Text>
                            </ListItem>
                        </View>
                    :null
                    }

                    <ListItem icon onPress={this.contacto}>
                        <Left>
                            <Icon name="contact" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Acerca de</Text>
                        </Body>
                        <Right>
                            <Icon name={contacto ? "arrow-up":"arrow-down"} />
                        </Right>
                    </ListItem>
                    {contacto ?
                        <View style={{backgroundColor:"#555555"}}>

                            <ListItem onPress={()=>Actions.contactanos()} >
                                <Text style={{color:'white'}}>Contactanos</Text>
                            </ListItem>
                            <ListItem onPress={()=>Actions.about()} >
                                <Text style={{color:'white'}}>¿Qué es Allende?</Text>
                            </ListItem>
                        </View>
                        :null
                    }
                </Content>
                <View style={styles.boton}>
                    <Button full bordered light>
                        <Text>CERRAR SESIÓN</Text>
                    </Button>
                    <Text style={{fontSize:12, color:'white',marginTop:20 }}>Términos y condiciones</Text>
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({

    title:{
        width:'100%',
        color:'white',
        marginBottom:20,
    },
    texito:{
        color:'white'
    },
    boton:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    }
})
