/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/src/store/store';
import App from './AppNav'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('MissesDemo', () => Root);
