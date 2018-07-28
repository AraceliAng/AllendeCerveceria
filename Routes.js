import React from 'react';
import {StatusBar} from 'react-native'
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import LoginContainer from './src/components/login/LoginContainer'
import Recovery from './src/components/login/Recovery'
import MainPage from "./src/components/main/MainPage";
import AcercaDe from "./src/components/contact/AcercaDe";
import ProfilePage from "./src/components/profile/ProfilePage";
import HistorialMain from "./src/components/historial/HistorialMain"
import ResumenOrden from "./src/components/historial/ResumenOrden";
import CatalogoMain from "./src/components/catalogo/CatalogoMain";
import Contactanos from "./src/components/contact/Contactanos";
import OrdenActiva from "./src/components/ordenactiva/OrdenActiva";

const Routes = () => {
    return (
        <Root>
            <Router>

                <Scene key="root">
                    <Scene key="login" header={null} component={LoginContainer} inital />
                    <Scene key="main" header={null} component={MainPage} />
                    <Scene key="recovery" header={null} component={Recovery}/>
                    <Scene key="about" header={null} component={AcercaDe}/>
                    <Scene key="profile" header={null} component={ProfilePage}/>
                    <Scene key="historial" header={null} component={HistorialMain} />
                    <Scene key="resumen" header={null} component={ResumenOrden} />
                    <Scene key="catalogo" header={null} component={CatalogoMain}/>
                    <Scene key="contactanos" header={null} component={Contactanos}/>
                    <Scene key="ordenA" header={null} component={OrdenActiva}/>
                </Scene>
            </Router>
        </Root>
    );
}
export default Routes;