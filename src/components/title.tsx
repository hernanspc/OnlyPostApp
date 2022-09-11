import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Title = () => {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
            // backgroundColor: '#000'
        }}>
            <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
            <Text
                style={{
                    fontFamily: 'Lobster-Regular',
                    fontSize: 25,
                    fontWeight: '500',
                }}>
                OnlyPost
            </Text>
            <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
    )
}

export default Title

const styles = StyleSheet.create({})