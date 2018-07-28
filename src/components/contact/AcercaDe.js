
import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, StatusBar} from 'react-native'
import {Container,H1, Content,Header,Left,Button,Body,Title,Right,Icon} from 'native-base'
import fondo from '../../assets/img/cerveza.jpg'
import allende from '../../assets/img/guana.jpg'
import {Actions} from 'react-native-router-flux'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;


export default class CatalogoMain extends Component {
    constructor() {
        super();
        this.state = { showNavTitle: false };
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
                                Acerca de
                            </Text>
                        </Animatable.View>
                    )}
                    renderForeground={() => (
                        <View style={styles.titleContainer}>
                            <Text style={styles.imageTitle}>Acerca de</Text>
                        </View>
                    )}
                >
                    <TriggeringView
                        style={styles.section}
                        onHide={() => this.navTitleView.fadeInUp(200)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                        <H1>CERVECERÍA ALLENDE</H1>
                    </TriggeringView>
                    <View>
                        <Content>
                            <View >
                                <View style={{marginBottom:10, padding:20}}>
                                    <Text style={{color:'#9a9a9a', textAlign:'justify', marginBottom:15}}>
                                        Somos una empresa 100% mexicana que nace con el objetivo de crear cervezas
                                        artesanales de alta calidad, apegadas a las técnicas tradicionales que
                                        manifiestan un sólido compromiso y amor por México. Esto se complementa con
                                        un fuerte sentido de honestidad y responsabilidad al momento de reflejar nuestra
                                        cultura en cada una de las botellas que producimos.
                                    </Text>
                                    <Text style={{ textAlign:'justify',marginBottom:15}} >
                                        Trabajamos en equipo para crear productos de alta calidad que deleiten los sentidos
                                        de nuestros consumidores y que además, se conviertan en un referente obligatorio en el
                                        mercado nacional y extranjero siendo la cerveza artesanal mexicana de mayor preferencia.
                                    </Text>
                                    <Text style={{color:'#848484', textAlign:'justify',marginBottom:15}}>
                                        En Cervecería Allende, ofrecemos un producto sofisticado, inusual, creativo y que
                                        consiga embotellar la pasión que sentimos por nuestro país.
                                    </Text>
                                    <Text style={{ textAlign:'justify'}}>
                                        Queremos brindarle al público una nueva oportunidad de experimentar la historia,
                                        los colores, sabores y tradiciones de un México nunca antes visto.
                                    </Text>
                                </View>
                                <View>
                                    <Image source={allende} style={{height:200, width:'100%'}}/>
                                    <View style={{padding:20}}>
                                        <H1 style={{marginBottom:20}}>SAN MIGUEL DE ALLENDE: NUESTRA CASA</H1>
                                        <Text style={{color:'#9a9a9a', textAlign:'justify', marginBottom:15}}>
                                            San Miguel de Allende, uno de los destinos turísticos más celebrados dentro de
                                            nuestro país por propios y extraños detonó la creación de nuestra cerveza y da
                                            vida a la historia que queremos contar sobre la magia que existe en México.
                                            Para nosotros, la inspiración fue inminente por tratarse de un lugar tan lleno
                                            de arte música, gastronomía, arquitectura, y fiesta. Una ciudad con alma propia
                                            que increíblemente, carecía de su propia cerveza artesanal. Es por eso que decidimos
                                            otorgarle un vocero embotellado que manifestara la riqueza histórica y cultural
                                            que representa.
                                        </Text>
                                        <Text style={{ textAlign:'justify',marginBottom:15}} >
                                            Al ser parte de la ciudad, decidimos incorporar distintos elementos característicos
                                            a la marca, y de esta forma generar una identidad auténtica y genuina.
                                        </Text>
                                        <Text style={{color:'#848484', textAlign:'justify',marginBottom:15}}>
                                            Adoptamos a la Parroquia de San Miguel Arcángel como nuestro símbolo y plasmamos
                                            el encanto de las calles enmarcadas por los coloridos guardapolvos de las casas
                                            en el diseño de nuestras botellas.
                                        </Text>
                                        <Text style={{ textAlign:'justify'}}>
                                            Ahora que sabes quiénes somos y por qué lo hacemos, te invitamos a darle un
                                            trago al pueblo mágico de San Miguel y a ser parte de este recorrido culinario
                                            llamado Cervecería Allende.
                                        </Text>
                                    </View>

                                </View>

                            </View>
                        </Content>

                    </View>

                </HeaderImageScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    section: {
        padding: 20,
        marginBottom:5,
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
    }
});