import axios from 'axios';
import {API_BASE_URL} from "@/apiHandling/consts";

export const HttpPostMethod = async (endPoint: string, data: any) => {
    const headers = {
        ...(data instanceof FormData ? {} : {
            'Accept': 'application/vnd.api+json, application/json',
            'Content-Type': 'application/vnd.api+json, application/json',
        }),
    };
    const url = `${API_BASE_URL}/${endPoint}`;
    try {
        const response = await axios.post(url, data, { headers });
        console.log(response.data)
        return response.data;
    } catch (error) {

    }
};
