import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Post from '../components/post';
import { useUserPaginated } from '../hooks/useUserPaginated';

const Home = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    useUserPaginated();


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Post />
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