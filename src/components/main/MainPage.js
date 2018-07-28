import React,{Component} from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import {Container,Content,Header,Left,Right,Body,Text,Title,Button,Icon,Drawer} from 'native-base'
import SideBar from './SideBar'
import Promociones from "./Promociones";
type Props={};

export default class MainPage extends Component<Props>{
    render(){
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
            <Container >

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    onClose={this.closeDrawer} >

                    <Header transparent>
                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{color:'black'}} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{color:'black'}}>Hola Dylan</Title>
                        </Body>
                        <Right/>
                    </Header>

                    <Content style={{padding:20}}>

                        {[0,1,2,3,4,5,6].map((promo,i)=>
                            <Promociones key={i}/>
                        )}
                    </Content>
                </Drawer>
                <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            </Container>

        );
    }
}


