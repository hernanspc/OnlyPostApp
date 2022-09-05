import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Button, StatusBar, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import PostCard from '../components/post';
import { useUserPaginated } from '../hooks/useUserPaginated';
import { SimpleUsers } from '../interfaces/userInterfaces';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Stories from '../components/stories';
import SearchBox from '../components/searchBox';

const Home = () => {

    const { simpleUserList, loadUsers } = useUserPaginated();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [data, setData] = useState<SimpleUsers[]>([])

    useEffect(() => {
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

    const onRefresh = async () => {
        setRefreshing(true);
        await checkUserInStorage();
        await loadUsers();
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
                {data.length > 0 ?
                    <FlashList
                        data={data}
                        renderItem={(data => (
                            <PostCard
                                key={data.index}
                                user={data.item} />
                        ))}
                        keyExtractor={({ id }) => id.toString()}
                        showsVerticalScrollIndicator={false}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                    :
                    <View>
                        <TouchableOpacity
                            onPress={onRefresh}
                            style={{
                                width: '100%',
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 35,
                                    borderRadius: 5,
                                    borderColor: '#DEDEDE',
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 14,
                                        letterSpacing: 1,
                                        opacity: 0.8,
                                    }}>
                                    Cargar Datos
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }


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