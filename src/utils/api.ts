import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./functions/const";

export const axiosConfig = {
    baseURL: API_BASE_URL,
    headers: { "x-app-id": "APP" },
};

const axiosClientInstance = axios.create();

export { axiosClientInstance };

const asyncFetchApi = async (path: string, opts: any, callBack: any) => {
    const url = path;

    return await axiosClientInstance({
        url,
        ...opts,
    })
        .then((res) => {
            console.log("url ", url);
            if (callBack) {
                callBack(res.data);
            }
            return { error: null, data: res.data };
        })
        .catch((error) => {
            return { error: error, data: null };
        });
};

export { asyncFetchApi };

const fetchApiEffect = (path: string, opts: any, depts = []) => {
    const [response, setResponse] = useState({
        error: null,
        data: null,
        loading: true,
    });

    const url = path;
    console.log("url ", url);
    useEffect(() => {
        setResponse((prevResponse) => ({ ...prevResponse, loading: true }));
        axiosClientInstance({
            url,
            ...opts,
        })
            .then(({ data }) => {
                setResponse({ ...response, loading: false, data: data });
            })
            .catch((error) => {
                setResponse({ ...response, loading: false, error: error });
            });
    }, depts);

    return response;
};

export { fetchApiEffect };
