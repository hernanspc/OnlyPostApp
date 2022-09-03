import React, { useEffect, useState } from 'react';
import { userApi } from '../api/userApi';
import { UsersResponse, SimpleUsers, PostResponse } from '../interfaces/userInterfaces';
import { asyncFetchApi, fetchApiEffect } from '../utils/api';

export const useUserPaginated = () => {

    const [simpleUserList, setSimpleUserList] = useState<SimpleUsers[]>([])
    const url = "https://jsonplaceholder.typicode.com/users";


    const loadUsers = async () => {
        const resp = await userApi.get(url);

        // console.log('resp ', resp.data)
        mapUserList(resp.data);
    }

    const mapUserList = async (userList: UsersResponse[]) => {

        const filtered = userList.filter(({ id }) => id <= 5);

        const newUserList: SimpleUsers[] = filtered.map(({ id, name, username }) => {

            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            const urlPost: string = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
            fetch(urlPost)
                .then(response => response.json())
                .then(data => {
                    // console.log(`data ${id} `, data)
                });
            // objeto posT=["",","]
            // console.log('element ', id)
            return {
                id,
                name,
                username,
                picture,
                urlPost,
            }
        })

        console.log('newUserList ', newUserList)
        // userList.forEach((user) => {
        //     console.log("user ", user.id)
        // })

    }

    useEffect(() => {
        loadUsers();
    }, [])

    return {

    }
}