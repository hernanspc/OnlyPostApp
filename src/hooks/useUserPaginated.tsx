import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userApi } from '../api/userApi';
import { UsersResponse, SimpleUsers, PostResponse } from '../interfaces/userInterfaces';

export const useUserPaginated = () => {

    const [simpleUserList, setSimpleUserList] = useState<SimpleUsers[]>([])

    const loadUsers = async () => {
        const resp = await userApi.get(`https://jsonplaceholder.typicode.com/users`);
        mapUserList(resp.data);
    }

    const getPostsOfUser = async (id: number) => {
        const resp = await userApi.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        const value = resp.data;
        const arrayPosts = value.map((e: any, index: number) => (
            {
                ...e,
                imagenPublicacion: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post${e.id}.jpg`
            }
        ));
        return await arrayPosts;
    }

    const mapUserList = async (userList: UsersResponse[]) => {

        const filtered = userList.filter(({ id }) => id <= 5);
        const usersPostsPromises = filtered.map((user) => {
            return getPostsOfUser(user.id)
        })

        let allRealPosts: PostResponse[] = []

        const allPosts = await Promise.all(usersPostsPromises)
        allPosts.map(post => {
            allRealPosts.push(...post)
        })

        const userPosts = filtered.map((user, index) => (
            {
                ...user,
                picture: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user${user.id}.jpg`,
                loggedImageUser: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg`,
                publications: allRealPosts.filter(publications => publications.userId === user.id).slice(0, 3),
                likes: 10 * (index + 1),
                isLiked: false,
            }
        ))
        saveStoreData(userPosts)
        setSimpleUserList(userPosts);
    }

    const saveStoreData = async (value: object) => {
        try {
            await AsyncStorage.removeItem('@usersWithPost');
            await AsyncStorage.setItem('@usersWithPost', JSON.stringify(value))
        } catch (e) {
            return (e)
        }
    }

    const evaluate = async () => {
        const jsonValue = await AsyncStorage.getItem('@usersWithPost')
        if (!jsonValue) {
            loadUsers();
        } else {
            return
        }
    }

    useEffect(() => {
        evaluate();
    }, [])


    return {
        simpleUserList, loadUsers
    }
}