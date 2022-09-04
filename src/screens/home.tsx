import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import PostCard from '../components/post';
import { useUserPaginated } from '../hooks/useUserPaginated';
import { SimpleUsers } from '../interfaces/userInterfaces';

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
            <ScrollView>
                <FlashList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={(data => (
                        <PostCard
                            key={data.index}
                            user={data.item} />
                    ))}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        width: '100%',

    }
}) 