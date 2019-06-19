import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { fetchSubScribeList } from '../actions/Friend'
import PlacehoderImage from '../components/PlaceholderImage';
import Header from '../components/Header'
import Colors from "../configs/ComStyle";

// import store from '../store/store';


class SearchHeader extends Component {
    render () {
        return (
            <TextInput
                placeholder='搜索'
                clearButtonMode='while-editing'
                underlineColorAndroid='transparent'
                style={styles.input}
            />
        )
    }
}

class Friend extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        const {data, fetchSubScribeList} = this.props;
        fetchSubScribeList(data);
    }

    render() {
        const { data, refreshing, fetchSubScribeList } = this.props;
        console.log('Friend', this.props);
        return (
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Colors.titleRed}}>
                    <Header title="精华" style={{backgroundColor: Colors.titleRed}} titleComponent={<SearchHeader />} />
                </SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    refreshing={refreshing}
                    onRefresh={() => fetchSubScribeList(data)}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }

    _ItemSeparatorComponent = () => {
        return (
            <View style={{height: 0.5, marginLeft: 15, backgroundColor: 'rgba(100,100, 100, 0.2)'}} />
        )
    };

    _keyExtractor = (item, index) => {
        return item.theme_name + index;
    };

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.item}
                onPress={() => this._goToDetail(item)}
            >
                <PlacehoderImage
                    source={{uri: item.image_list}}
                    placeholder={{uri: 'placeholder'}}
                    style={{width: 60, height: 60}}
                />

                <View style={styles.itemContent}>
                    <Text style={styles.itemTitle}>{item.theme_name}</Text>
                    <Text style={styles.itemSubTitle}>今日更新 {item.today_topic_num} | 当前在线 {item.visit}</Text>
                    <Text
                        style={item.info ? styles.itemDesc: {height: 0}}
                        numberOfLines={1}
                    >
                        {item.info.replace('\u3000', '').split('\r\n')[0]}
                    </Text>
                </View>

                <PlacehoderImage
                    source={{uri: 'arrow_right'}}
                    style={{width: 7, height: 12}}
                />
            </TouchableOpacity>
        )
    };

    _goToDetail = (item) => {
        console.log('title', item.theme_name);
        // this.props.navigation.navigate('FriendDetail', {title: item.theme_name});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        flex: 1,
        height: 30,
        padding: 0,
        paddingLeft: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    item: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    itemImage: {
        width: 60,
        height: 60,
    },
    itemContent: {
        flex: 1,
        height: 80,
        marginHorizontal: 10,
        justifyContent: 'space-evenly',
    },
    itemTitle: {
        fontSize: 16,
        color: '#000',
    },
    itemSubTitle: {
        color: '#aaa',
        fontSize: 12,
    },
    itemDesc: {
        color: '#aaa',
        fontSize: 12,
    }
});

const mapStateToProps = state => ({
    refreshing: state.friendData.refreshing,
    data: state.friendData.data,
});

const mapDispatchToProps = {
    fetchSubScribeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Friend);