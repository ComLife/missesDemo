import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Imgs from '../configs/imgs'
import Colors from '../configs/ComStyle'

export default class NavItem extends Component {
    static propTypes = {
        source: PropTypes.number,
        onPress: PropTypes.func,
        touchStyle: PropTypes.object,
        imgStyle: PropTypes.object,
    };

    static defaultProps = {
        source: Imgs.nav_game,
        onPress: null,
        touchStyle: null,
        imgStyle: null,
    };
    render() {
        const { source, onPress } = this.props;
        return (
            <TouchableOpacity
                style={[styles.item, this.props.touchStyle]}
                onPress={onPress}
            >
                <Image
                    source={source}
                    style={this.props.imgStyle}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: 44,
        height:44,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


