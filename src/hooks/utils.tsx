import axios from "axios";
import { userApi } from "../api/userApi";

export const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
// export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
    return await axios.get(`${BASE_URL}`);
};