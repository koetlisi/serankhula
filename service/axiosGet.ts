import axios, { AxiosResponse, AxiosError } from 'axios';
import {apiClient} from "@/app/lib/types/constants";

interface Params {
    [key: string]: any;
}


export const AxiosGet = async <T = any>(token: string, endPoint: string, params: Params = {}): Promise<T | undefined> => {
    try {
        const url = `${endPoint}`;
        console.log('Making GET request to:', url);
        console.log('With params:', params);

        const response: AxiosResponse<T> = await apiClient.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            params: {
                ...params,
                token,
            },
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const errorData = axiosError.response.data;
                console.error('Error response data:', errorData);
                console.error('Error status:', axiosError.response.status);
            } else if (axiosError.request) {
                console.error('Error request:', axiosError.request);
            } else {
                console.error('Error message:', axiosError.message);
                alert(`Error: ${axiosError.message}`);
            }
        } else {
            console.error('Unexpected error:', error);
            alert('An unexpected error occurred.');
        }
    }
};
