import axios from 'axios';
import {apiClient} from "@/apiHandling/consts";

export const HttpPostMethod = async (token:any,endPoint: string, data: any) => {
    const headers = {
        ...(data instanceof FormData ? {
            'Authorization': `Bearer ${token}`,
        } : {
            'Accept': 'application/vnd.api+json, application/json',
            'Content-Type': 'application/vnd.api+json, application/json',
            'Authorization': `Bearer ${token}`,
        }),
    };
    const url = `${endPoint}`;
    try {
        const response = await apiClient.post(url, data, { headers });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
        return error
    }
};
