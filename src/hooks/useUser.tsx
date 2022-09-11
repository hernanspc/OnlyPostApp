import { useEffect, useRef, useState } from 'react';
import { userApi } from '../api/userApi';
import { UsersResponse, SimpleUsers, PostResponse } from '../interfaces/userInterfaces';
import { getDataAsyncStorage, removeDataAsyncStorage, saveDataAsyncStorage } from '../utils/storage';

export const useUserHook = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [simpleUser, setSimpleUser] = useState<SimpleUsers[]>([]);

    const getUsers = async () => {
        const resp = await userApi.get('https://jsonplaceholder.typicode.com/users')
        return await resp.data
    }

    const getPostsOfUser = async (id: string) => {
        const resp = await userApi.get('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        const value = resp.data;
        const arrayPosts = value.map((e: any) => (
            { ...e, imagenPublicacion: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post${e.id}.jpg` }
        ));
        return await arrayPosts;
    }

    const getUsersWithPosts = async () => {
        const storage = await getDataAsyncStorage('@data')
        if (storage) {
            setSimpleUser(storage);
            return;
        }

        const users = await getUsers()
        const filtered = users.filter((user: UsersResponse) => user.id <= 5);
        const usersPostsPromises = filtered.map((u: { id: string; }) => {
            return getPostsOfUser(u.id)
        })

        let allRealPosts: PostResponse[] = []
        const allPosts = await Promise.all(usersPostsPromises)
        allPosts.map(post => {
            allRealPosts.push(...post)
        })
        const userPosts = filtered.map((user: UsersResponse, index: number) => (
            {
                ...user,
                picture: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user${user.id}.jpg`,
                loggedImageUser: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg`,
                publications: allRealPosts.filter(publications => publications.userId === user.id).slice(0, 3),
                likes: 10 * (index + 1),
                isLiked: false,
            }
        ))

        saveDataAsyncStorage('@data', userPosts)
        setSimpleUser(userPosts);
        setIsLoading(false);
    }

    useEffect(() => {
        getUsersWithPosts();
    }, [])

    return {
        isLoading,
        simpleUser,
        getUsersWithPosts,
    }

}
