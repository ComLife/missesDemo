import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { isIPhoneX } from '../configs/Device';
import Colors from "../configs/ComStyle";


export default class TabBar extends Component {
    renderItem(route, index) {
        console.log('TabBar render', route);
        const { navigation, jumpTo, activeTintColor, inactiveTintColor } = this.props;
        const focused = (index === navigation.state.index);
        const color = focused ? activeTintColor : inactiveTintColor;
        const tintColor = focused ? activeTintColor : inactiveTintColor;
        const TabScene = {
            focused,
            route,
            color,
            tintColor,
        };
        if (index === 2) {
            return (
                <TouchableOpacity
                    key={route.key}
                    activeOpacity={0.7}
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('Publish')}
                >
                    <View  style={styles.tabItem}>
                        {this.props.renderIcon(TabScene)}
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    key={route.key}
                    style={styles.tabItem}
                    onPress={() => jumpTo(route.key)}
                >
                    <View style={styles.tabItem}>
                        {this.props.renderIcon(TabScene)}
                        <Text style={{color, fontSize: 10}}>
                            {this.props.getLabelText(TabScene)}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
    };
    render(){
        const { navigation } = this.props;
        const { routes } = navigation.state;
        console.log('TabBar render', this.props);
        return (
            <View style={styles.tab}>
                {routes && routes.map((route,index) => this.renderItem(route, index))}
            </View>
        );
    }
}
const styles = {
    tab: {
        backgroundColor: Colors.themeWhite,
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopColor: 'rgba(0, 0, 0, 0.3)',
        borderTopWidth: 0.5,
        paddingBottom: isIPhoneX ? 34 : 0,
    },
    tabLine: {
        height: 0.5,
        backgroundColor: 'rgba(100, 100, 100, 0.3)',
    },
    tabItem: {
        height:49,
        width:49,
        alignItems:'center',
        justifyContent:'center'
    },
};
