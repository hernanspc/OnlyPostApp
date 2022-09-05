import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Button, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import PostCard from '../components/post';
import { useUserPaginated } from '../hooks/useUserPaginated';
import { SimpleUsers } from '../interfaces/userInterfaces';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = () => {

    const { loadUsers } = useUserPaginated();
    const [data, setData] = useState<SimpleUsers[]>([])

    useEffect(() => {
        loadUsers();
        checkUserInStorage();
        SplashScreen.hide();
    }, [])

    const checkUserInStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@usersWithPost')
            if (!jsonValue) {
                return;
            } else {
                setData(JSON.parse(jsonValue))
            }
        } catch (e) {
            return e
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    animated={true}
                />
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        alignItems: 'center',
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
                <ScrollView>
                    <FlashList
                        data={data}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={(data => (
                            <PostCard
                                key={data.index}
                                user={data.item} />
                        ))}
                    />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flexDirection: 'column',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        width: '100%',

    }
}) 