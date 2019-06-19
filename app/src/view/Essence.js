import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import API from '../configs/API';
import NavItem from '../components/navItem';
import { width } from '../configs/Device';
import ContentList from './contentList';
import Header from '../components/Header'
import Imgs from '../configs/imgs';
import Colors from "../configs/ComStyle";
import ContentWaterfall from './contentWaterfall';


export default class Essence extends Component {
    render() {
        const {navigation} = this.props;
        const headerLeft = <NavItem
            source={Imgs.nav_game}
            onPress={() => this.props.navigation.navigate('WebPage', {source: {uri: 'http://d.api.budejie.com/user/hot/35'}})}
        />;

        const headerRight= <NavItem
            source={Imgs.nav_random}
            onPress={() => this.props.navigation.navigate('Details')}
        />;
        return (
            <View style={{flex:1}}>
                <SafeAreaView style={{backgroundColor: Colors.titleRed}}>
                    <Header title="精华" style={{backgroundColor: Colors.titleRed}} leftComponent={headerLeft} navigation={this.props.navigation} rightComponent={headerRight} />
                </SafeAreaView>
                <ScrollableTabView renderTabBar={this._renderTabBar}>
                    <ContentList
                        tabLabel="推荐"
                        navigation={navigation}
                        api={API.essence.recommend}
                    />
                    <ContentWaterfall
                        tabLabel="视频"
                        navigation={navigation}
                        api={API.essence.video}
                    />
                    <ContentList
                        tabLabel="图片"
                        navigation={navigation}
                        api={API.essence.picture}
                    />
                    <ContentList
                        tabLabel="笑话"
                        navigation={navigation}
                        api={API.essence.joke}
                    />
                    <ContentList
                        tabLabel="排行"
                        navigation={navigation}
                        api={API.essence.hot}
                    />
                </ScrollableTabView>
            </View>
        );
    }

    _renderTabBar = () => {
        return <DefaultTabBar
            backgroundColor={Colors.titleRed}
            activeTextColor={Colors.themeWhite}
            inactiveTextColor={Colors.themeWhite}
            textStyle={styles.tabBarText}
            underlineStyle={styles.tabBarUnderline}
            style={{height: 35}}
        />
    }
}

const styles = StyleSheet.create({
    tabBarText: {
        fontSize: 13,
        textAlign: 'center',
    },
    tabBarUnderline: {
        width: 24,
        marginHorizontal: (width-24*5)/10,
        backgroundColor: '#fff',
        borderRadius: 4,
        marginBottom: 2,
    }
});