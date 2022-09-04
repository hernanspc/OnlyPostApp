import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Post from '../components/post';
import { useUserPaginated } from '../hooks/useUserPaginated';
import { SimpleUsers } from '../interfaces/userInterfaces';

const Home = () => {

    const { simpleUserList } = useUserPaginated();

    const [data, setData] = useState<SimpleUsers[]>([])

    useEffect(() => {
        SplashScreen.hide();
        checkUserPost();
    }, [])

    const checkUserPost = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@usersWithPost')
            // console.log('jsonValue ', jsonValue)
            if (jsonValue) {
                setData(JSON.parse(jsonValue))
                return;
            }
            await AsyncStorage.setItem("@usersWithPost", JSON.stringify(simpleUserList));
        } catch (e) {
            return e
        }
    };

    const removeItemStorage = async () => {
        AsyncStorage.removeItem('@usersWithPost');
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <Post /> */}
                <Button onPress={checkUserPost}
                    title="Submit" />

                <Button onPress={removeItemStorage}
                    title="Borrar" />

                <Button onPress={() => {
                    console.log("data ", data)
                }}
                    title="imprimir data" />

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