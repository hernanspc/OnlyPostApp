import React, { useEffect, useState } from 'react';
import { userApi } from '../api/userApi';
import { UsersResponse, SimpleUsers, PostResponse } from '../interfaces/userInterfaces';
import { asyncFetchApi, fetchApiEffect } from '../utils/api';

export const useUserPaginated = () => {

    const [simpleUserList, setSimpleUserList] = useState<SimpleUsers[]>([])

    const url = "https://jsonplaceholder.typicode.com/users";


    const loadUsers = async () => {
        const resp = await userApi.get(url);
        mapUserList(resp.data);
    }

    const getPostsOfUser = async (id: number) => {
        const resp = await userApi.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        return await resp.data;
    }

    const mapUserList = async (userList: UsersResponse[]) => {

        const filtered = userList.filter(({ id }) => id <= 5);
        const usersPostsPromises = filtered.map((u) => {
            return getPostsOfUser(u.id)
        })
        let allRealPosts: PostResponse[] = []
        const allPosts = await Promise.all(usersPostsPromises)
        allPosts.map(p => {
            allRealPosts.push(...p)
        })
        const userPosts = filtered.map((u) => (
            {
                ...u,
                picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${u.id}.png`,
                publications: allRealPosts.filter(p => p.userId === u.id)
            }
        ))
        console.log("userPosts ", userPosts)
        setSimpleUserList(userPosts)

    }

    useEffect(() => {
        loadUsers();
    }, [])

    return {
        simpleUserList
    }
}