import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Title = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
            <Text style={styles.titleText}> OnlyPost </Text>
            <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Lobster-Regular',
        fontSize: 25,
        fontWeight: '500',
    }
})