import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, Dimensions
} from 'react-native';

import Imgs from '../configs/imgs';
import Colors from '../configs/ComStyle';
const ScreenSize = Dimensions.get('window');


export default class Header extends Component {
    static propTypes = {
        leftComponent: PropTypes.element, // header左边控件
        rightComponent: PropTypes.element, // header右方控件
        titleComponent: PropTypes.element, // 标题控件
        onPressLeft: PropTypes.func, // 左边点击事件
        onPressRight: PropTypes.func, // 右边点击事件
        leftTitle: PropTypes.string, // 左边文本信息
        rightTitle: PropTypes.string, // 右边文本信息
        title: PropTypes.string, // 中间文本信息
        backgroundColor: PropTypes.string, // 背景颜色
        rightTextStyle: PropTypes.object, // 右边文字文本颜色
        navigation: PropTypes.object,
        leftImage: PropTypes.number, // 顶部左边返回按钮图片
        titleColor: PropTypes.string, // 字体颜色
        style: PropTypes.object,
        leftStyle: PropTypes.object,
        leftTextStyle: PropTypes.object,
        titleStyle: PropTypes.object,
    };

    static defaultProps = {
        leftTitle: '',
        title: '',
        rightTitle: '',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            onPressLeft, title, onPressRight, leftTitle, rightTitle, leftComponent, rightComponent, titleComponent, rightTextStyle, leftImage,
            titleColor, style, leftStyle, leftTextStyle, titleStyle
        } = this.props;
        /**
         * 渲染规则
         * 1. leftComponent，rightComponent，titleComponent高于本身的优先级
         */
        return (
            <View style={[styles.header, style]}>
                {
                    leftComponent ||
                    (leftTitle ?
                        <TouchableOpacity
                            style={[styles.touchOpa, leftStyle]} activeOpacity={0.5}
                            onPress={() => (onPressLeft ? onPressLeft() : (this.props.navigation.goBack()))}
                        >
                            <Image source={leftImage || Imgs.back} style={styles.leftImage} />
                            <Text style={[styles.leftText, leftTextStyle, {color: titleColor}]}>{leftTitle}</Text>
                        </TouchableOpacity> : <View/>)
                }
                <View style={styles.center}>
                    {titleComponent || <Text style={[styles.headerTitle, titleStyle, {color: titleColor} ]}>{title}</Text>}
                </View>
                {rightComponent ||
                    (rightTitle ?
                        <TouchableOpacity style={null} activeOpacity={0.5} onPress={onPressRight}>
                            <Text style={[styles.rightText, rightTextStyle, {color: titleColor}]}>{rightTitle}</Text>
                        </TouchableOpacity> : <View/>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: ScreenSize.widget,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: Colors.themeWhite
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    leftOut: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchOpa: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftImage: {
        width: 10,
        height: 20,
    },
    leftText: {
        fontSize: 20,
        color: '#333333',
        marginLeft: 10,
    },
    rightText: {
        fontSize: 22,
        color: '#333333',
        marginLeft: 10,
    },
    center: {
        position: 'absolute',
        right:0,
        left:0,
        justifyContent:'center',
        flexDirection:'row'
    }
});
