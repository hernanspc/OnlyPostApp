import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SimpleUsers } from '../interfaces/userInterfaces';

interface Props {
    picture?: string;
    name: string;
}

const HeaderPost = ({ picture, name }: Props) => {
    return (
        <View style={styles.postHead}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 40, height: 40, borderRadius: 100 }}
                    source={{ uri: picture }}
                />
                <View style={{ paddingLeft: 5 }}>
                    <Text style={styles.nameText}> {name}  </Text>
                    <Text style={styles.timeText}>13 weeks ago</Text>
                </View>
            </View>
            <Feather name="more-vertical" style={{ fontSize: 20 }} />
        </View>
    )
}

export default HeaderPost

const styles = StyleSheet.create({
    postHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    nameText: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    timeText: {
        fontSize: 11,
        color: "#B0B0B0"
    }
})