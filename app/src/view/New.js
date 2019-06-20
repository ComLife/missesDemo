import React, { Component } from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import { width } from '../configs/Device';
import NavItem from '../components/navItem';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import ContentList from './contentList';
import ContentWaterfall from './contentWaterfall';
import API from '../configs/API';
import Colors from '../configs/ComStyle'
import Header from '../components/Header'
import Imgs from '../configs/imgs';



export default class Essence extends Component {
    constructor(props){
        super(props);
        this.headerLeft = <NavItem
            source={Imgs.nav_review}
            onPress={() => this.props.navigation.navigate('Details')}
        />;
        this.headerRight = <NavItem
            source={Imgs.nav_search}
            onPress={() => this.props.navigation.navigate('Details')}
        />;
    }
    render() {
        const {navigation} = this.props;

        return (
            <View style={{flex: 1}}>
                <SafeAreaView style={{backgroundColor: Colors.titleRed}}>
                    <Header title="精华" style={{backgroundColor: Colors.titleRed}} leftComponent={this.headerLeft} navigation={this.props.navigation} rightComponent={this.headerRight} />
                </SafeAreaView>
                <ScrollableTabView renderTabBar={this._renderTabBar}>
                    <ContentList
                        tabLabel="全部"
                        navigation={navigation}
                        api={API.new.all}
                    />
                    <ContentWaterfall
                        tabLabel="视频"
                        navigation={navigation}
                        api={API.new.video}
                    />
                    <ContentList
                        tabLabel="图片"
                        navigation={navigation}
                        api={API.new.picture}
                    />
                    <ContentList
                        tabLabel="笑话"
                        navigation={navigation}
                        api={API.new.joke}
                    />
                    <ContentList
                        tabLabel="影视分享"
                        navigation={navigation}
                        api={API.new.movie}
                    />
                </ScrollableTabView>
            </View>
        )
    }

    _renderTabBar = () => {
        return <DefaultTabBar
            backgroundColor={'#ff2e57'}
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
        backgroundColor: Colors.themeWhite,
        borderRadius: 4,
        marginBottom: 2,
    }
})
