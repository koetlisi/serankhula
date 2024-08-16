import axios, { AxiosResponse, AxiosError } from 'axios';
import { apiClient} from "@/apiHandling/consts";

interface Params {
    [key: string]: any;
}



export const HttpGetMethod = async <T>(token:string,endPoint: string, params: Params = {}): Promise<T | undefined> => {
    try {
        const url = `${endPoint}`;

        console.log('Making GET request to:', url);
        console.log('With params:', params);

        const response: AxiosResponse<T> = await apiClient.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            params: params,
        });

        console.log('Response received:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error('Error response:', axiosError.response.data);
                console.error('Error status:', axiosError.response.status);
                alert(`HTTP error! status: ${axiosError.response.status}`);
            } else if (axiosError.request) {
                console.error('Error request:', axiosError.request);
                alert('No response received from the server.');
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
