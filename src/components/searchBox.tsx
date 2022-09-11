import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
    return (
        <View style={styles.container}>
            <Ionicons style={styles.icon} name="search" />
            <TextInput style={styles.searchText}
                placeholder="Search"
                placeholderTextColor="#909090"
            />
        </View>
    );
};

export default SearchBox;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
    },
    searchText: {
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40,
    },
    icon: {
        fontSize: 18,
        opacity: 0.7,
        position: 'absolute',
        zIndex: 1,
        left: 25,
    }
});