import axios from 'axios';
import {apiClient, apiClientNodejs} from "@/apiHandling/consts";

export const FilePost = async (token:any,endPoint: string, data: any) => {
    const headers = {
        ...(data instanceof FormData ? {
            'Authorization': `Bearer ${token}`,
        } : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }),
    };
    const url = `${endPoint}`;
    try {
        const response = await apiClientNodejs.post(url, data, {
            headers,
            params:{
                token
            }
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
        return error
    }
};
