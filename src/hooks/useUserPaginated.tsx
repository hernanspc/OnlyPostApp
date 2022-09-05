import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userApi } from '../api/userApi';
import { UsersResponse, SimpleUsers, PostResponse } from '../interfaces/userInterfaces';

export const useUserPaginated = () => {

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
        const userPosts = filtered.map((user) => (
            {
                ...user,
                picture: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user${user.id}.jpg`,
                loggedImageUser: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg`,
                publications: allRealPosts.filter(publications => publications.userId === user.id).slice(0, 3),
                likes: 765,
                isLiked: false,
            }
        ))
        saveStoreData(userPosts)
    }

    const saveStoreData = async (value: object) => {
        try {
            await AsyncStorage.setItem('@usersWithPost', JSON.stringify(value))
        } catch (e) {
            return (e)
        }
    }

    return {
        loadUsers
    }
}