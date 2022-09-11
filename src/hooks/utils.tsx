import axios from "axios";

export const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
    return await axios.get(`${BASE_URL}`);
};