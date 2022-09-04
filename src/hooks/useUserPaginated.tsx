import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { userApi } from '../api/userApi';
import { UsersResponse, SimpleUsers, PostResponse } from '../interfaces/userInterfaces';
import { asyncFetchApi, fetchApiEffect } from '../utils/api';

export const useUserPaginated = () => {

    const loadUsers = async () => {
        // console.log('kakasjasnadksada')
        const resp = await userApi.get(`https://jsonplaceholder.typicode.com/users`);
        mapUserList(resp.data);
    }

    const getPostsOfUser = async (id: number) => {
        const resp = await userApi.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);

        const value = resp.data;

        const filler = value.map((e: any, index: number) => (
            {
                ...e,
                imagenPublicacion: "https://picsum.photos/200"
            }
        ));
        // console.log('filler ', filler)

        return await filler;
    }

    const mapUserList = async (userList: UsersResponse[]) => {

        const filtered = userList.filter(({ id }) => id <= 5);
        const usersPostsPromises = filtered.map((user) => {
            return getPostsOfUser(user.id)
        })

        let allRealPosts: PostResponse[] = []

        const allPosts = await Promise.all(usersPostsPromises)
        allPosts.map(post => {
            // postImg: "https://random.imagecdn.app/500/150"
            allRealPosts.push(...post)
        })
        const userPosts = filtered.map((user) => (
            {
                ...user,
                // picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${user.id}.png`,
                picture: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user${user.id}.jpg`,
                // loggedImageUser: `https://lh3.googleusercontent.com/a-/AFdZucrOwceQ_OjcD2MAfsbNwzLIZ4IbqiPICm5nzBMl=s192-c-rg-br100`,
                // loggedImageUser: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308074/Zuckerberg_g2ni76.webp`,
                loggedImageUser: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/Mark_Zuckerberg_F8_2019_Keynote__32830578717___cropped_kgmnd1.jpg`,
                // loggedImageUser: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662310301/OnlyPost/user0.jpg`,
                publications: allRealPosts.filter(publications => publications.userId === user.id).slice(0, 3),
                likes: 765,
                isLiked: false,
            }
        ))
        console.log('userPosts ', userPosts)
        saveStoreData(userPosts)
    }

    const saveStoreData = async (value: object) => {
        console.log('guardando')
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