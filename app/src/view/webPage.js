import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Colors from "../configs/ComStyle";
import { WebView } from 'react-native-webview';


export default class WebPage extends Component {
    render() {
        const { source } = this.props.navigation.state.params;
        console.log('WebPage', this.props);
        return (
            <SafeAreaView style={{flex: 1}}>
                <Header style={{backgroundColor: Colors.themeWhite}} leftTitle={''} navigation={this.props.navigation} />

                <WebView
                    source={source}
                    style={{flex: 1}}
                    scalesPageToFit={true}
                    mediaPlaybackRequiresUserAction={true}
                />
            </SafeAreaView>
        );
    }
}