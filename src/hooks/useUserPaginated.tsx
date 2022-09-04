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
        return await resp.data;
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
                picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${user.id}.png`,
                loggedImageUser: `https://lh3.googleusercontent.com/a-/AFdZucrOwceQ_OjcD2MAfsbNwzLIZ4IbqiPICm5nzBMl=s192-c-rg-br100`,
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