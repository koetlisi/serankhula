import axios from 'axios';
import {apiClient} from "@/apiHandling/consts";

export const HttpPostMethod = async (token:any,endPoint: string, data: any) => {
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
        data.name = token;
        const response = await apiClient.post(url, data, { headers });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
        return error
    }
};
