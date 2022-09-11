import React, { useEffect, useState } from 'react'
import { FlashList } from '@shopify/flash-list';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Button, StatusBar, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import PostCard from '../components/post';
import { useUserHook } from '../hooks/useUser';
import { SimpleUsers } from '../interfaces/userInterfaces';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SearchBox from '../components/searchBox';
import { removeDataAsyncStorage } from '../utils/storage';
import ItemSkeleton from '../components/itemSkeleton';

const Home = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const { simpleUser, getUsersWithPosts } = useUserHook();

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    const onRefresh = async () => {
        setRefreshing(true);
        await removeDataAsyncStorage('@data');
        getUsersWithPosts();
        setRefreshing(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                height: '100%',
                backgroundColor: 'white',
                position: 'relative',
            }}>
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
                <SearchBox />

                <FlashList
                    data={simpleUser}
                    renderItem={(data => (
                        <PostCard
                            key={data.index}
                            user={data.item} />
                    ))}
                    keyExtractor={({ id }) => id.toString()}
                    showsVerticalScrollIndicator={false}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    ListEmptyComponent={<ItemSkeleton />}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        width: '100%',

    }
}) 