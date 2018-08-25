import React from 'react';
import {StyleSheet,View} from 'react-native'
import {ListItem,List,Thumbnail,Body,Text} from 'native-base';

export const ResumenComponent = ({total,ipa,golden,})=>(

    <View>
        <List>
            <ListItem style={styles.contentTitle}>
                <Text style={styles.title}>Resumen de orden</Text>
                <Text note>Total: $1,856.00</Text>
            </ListItem>
            <ListItem itemDivider>
                <Text style={styles.subTitle}>Detalle:</Text>
            </ListItem>
            <ListItem>
                <Thumbnail  square size={80} source={caja} />

                <Body>
                <Text style={{fontSize:16}}>Caja 24 Grande</Text>
                <Text note style={{fontSize:12, marginBottom:10}}>2 Unidades</Text>
                <Text style={{fontSize:15}}>$1,680.00</Text>
                </Body>

            </ListItem>
            <ListItem>
                <Thumbnail  square size={80} source={caja} />

                <Body>
                <Text style={{fontSize:16}}>4 Pack Allende Golden Ale</Text>
                <Text note style={{fontSize:12, marginBottom:10}}>1 Unidad</Text>
                <Text style={{fontSize:15}}>$140.00</Text>
                </Body>

            </ListItem>
            <ListItem>
                <Thumbnail  square size={80} source={caja} />

                <Body>
                <Text style={{fontSize:16}}>Allende Golden Ale</Text>
                <Text note style={{fontSize:12, marginBottom:10}}>1 Unidad</Text>
                <Text style={{fontSize:15}}>$36.00</Text>
                </Body>

            </ListItem>
            <ListItem itemDivider>
                <Text style={styles.subTitle}>Costo:</Text>
            </ListItem>
            <ListItem >
                <Body>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Total:</Text>
                </Body>
                <Body style={{alignItems:'flex-end'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>$1,856.00</Text>
                </Body>


            </ListItem>
        </List>
    </View>
);

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    inputs:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        marginBottom:20,
        borderRadius:10
    },
    textito:{

    },
    botoncito:{
        color:'#ebecf2'
    }

})
