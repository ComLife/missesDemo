/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import Colors from "./app/src/configs/ComStyle";
import TabBar from './app/src/view/TabBar';
import Details from './app/src/view/details'
import WebPage from './app/src/view/webPage'


import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    SafeAreaView,
} from "react-navigation";

import Essence from './app/src/view/Essence';
import New from './app/src/view/New';
import Friend from './app/src/view/Friend';
import Me from './app/src/view/Me';
import Publish from './app/src/view/Publish';


const BottomTab = createBottomTabNavigator({
    Essence: {
        screen: Essence,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return <AntDesignIcon name={"home"} size={25} style={{color:tintColor}}/>;
            },
            tabBarLabel: '精华',
        }
    },
    New: {
        screen: New,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return <EntypoIcon name={"news"} size={25} style={{color:tintColor}}/>;
            },
            tabBarLabel: '最新',
        }
    },
    PublishPlaceHolder: { //占位用,此页面实际不会去调用
        screen: Component,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return <EntypoIcon name={"new-message"} size={25} style={{color:tintColor}}/>;
            },
        }
    },
    Friend: {
        screen: Friend,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return <FeatherIcon name={"airplay"} size={25} style={{color:tintColor}}/>;
            },
            tabBarLabel: '社区',
        }
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return <EntypoIcon name={"user"} size={25} style={{color:tintColor}}/>;
            },
            tabBarLabel: '我',
        }
    },
},{
    tabBarComponent:(props) => <TabBar {...props} />,// 自定义tab样式
    tabBarOptions: {
        activeTintColor: Colors.theme,
        inactiveTintColor: Colors.themeGray,
        labelStyle:{
            fontSize:12,
        },

        tabStyle: {
            // 控制首页图标和字体
        },
        style: {
            backgroundColor: Colors.themeBackground
        }
    }
});

const stackNav = createStackNavigator({
    BottomTab,
    Publish,
    Details,
    WebPage
},{
    initialRouteName: 'BottomTab',
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(stackNav);

