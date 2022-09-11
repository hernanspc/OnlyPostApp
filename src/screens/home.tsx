import React, { useEffect, useState } from 'react'
import { FlashList } from '@shopify/flash-list';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
import { useUserHook } from '../hooks/useUser';
import { removeDataAsyncStorage } from '../utils/storage';
import PostCard from '../components/post';
import SearchBox from '../components/searchBox';
import ItemSkeleton from '../components/itemSkeleton';
import Title from '../components/title';

const Home = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const { simpleUser, getUsersWithPosts } = useUserHook();

    const onRefresh = async () => {
        setRefreshing(true);
        await removeDataAsyncStorage('@data');
        getUsersWithPosts();
        setRefreshing(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
                <Title />
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
    wrapper: {
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        width: '100%',

    }
}) 