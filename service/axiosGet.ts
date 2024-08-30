import axios, { AxiosResponse, AxiosError } from 'axios';
import {apiClient} from "@/app/lib/types/constants";

interface Params {
    [key: string]: any;
}

// Define a custom error structure
interface ApiError {
    status: number;
    message: string;
    data?: any;
}

// Define the expected response type (if known)
interface ApiResponse<T = any> {
    data: T;
    status: number;
    message: string;
}

export const AxiosGet = async <T = any>(
    token: string,
    endPoint: string,
    params: Params = {}
): Promise<ApiResponse<T> | null> => {
    try {
        const url = `${endPoint}`;
        console.log('Making GET request to:', url);
        console.log('With params:', params);

        const response: AxiosResponse<ApiResponse<T>> = await apiClient.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            params: {
                ...params,
                token,
            },
        });

        console.log('Response received:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ApiError>;

            if (axiosError.response) {
                // Server responded with a status code other than 2xx
                const errorData = axiosError.response.data;
                console.error('Error response data:', errorData);
                console.error('Error status:', axiosError.response.status);
                alert(`HTTP error! status: ${axiosError.response.status} - ${errorData.message || 'Unknown error'}`);
                return null;
            } else if (axiosError.request) {
                // Request was made but no response was received
                console.error('Error request:', axiosError.request);
                alert('No response received from the server.');
                return null;
            } else {
                // Something else happened during the request setup
                console.error('Error message:', axiosError.message);
                alert(`Error: ${axiosError.message}`);
                return null;
            }
        } else {
            // Handle non-Axios errors
            console.error('Unexpected error:', error);
            alert('An unexpected error occurred.');
            return null;
        }
    }
};
