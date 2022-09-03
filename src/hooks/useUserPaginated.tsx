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

    const peticion = async (urlPost: string) => {
        const resp = await userApi.get(urlPost);
        return (resp.data);
    }

    const mapUserList = async (userList: UsersResponse[]) => {

        const filtered = userList.filter(({ id }) => id <= 5);
        // const [value, setvalue] = useState([])

        const newUserList: SimpleUsers[] = filtered.map(({ id, name, username }) => {

            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            const urlPost: string = `https://jsonplaceholder.typicode.com/users/${id}/posts`;

            // const publications: any = []
            // const resp = await userApi.get(urlPost);
            const publications: PostResponse = {
                "userId": 2,
                "id": 12,
                "title": "in quibusdam tempore odit est dolorem",
                "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
            };

            return {
                id,
                name,
                username,
                picture,
                urlPost,
                publications
            }
        })
        // console.log('newUserList ', newUserList)
        setSimpleUserList([...newUserList]);

    }

    useEffect(() => {
        loadUsers();
    }, [])

    return {
        simpleUserList
    }
}