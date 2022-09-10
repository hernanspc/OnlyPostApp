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
                <Image
                    source={{ uri: picture }}
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>

                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                        {name}
                    </Text>

                    <Text style={{ fontSize: 11, color: "#B0B0B0" }}>13 weeks ago</Text>
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
})