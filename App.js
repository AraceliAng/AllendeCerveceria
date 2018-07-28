/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View,YellowBox} from 'react-native'
import Routes from './Routes'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

                <Routes/>

    );
  }
}

