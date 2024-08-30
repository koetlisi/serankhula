import {apiClient} from "@/app/lib/types/constants";
import axios from "axios";

export const AxiosPost = async (token: string, endPoint: string, data: any) => {
    const headers = data instanceof FormData ? {
        'Authorization': `Bearer ${token}`,
    } : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    try {
        const response = await apiClient.post(endPoint, data, {
            headers,
            params: {
                token,
            },
        });
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error('Error response:', {
                    status: error.response.status,
                    data: error.response.data,
                    headers: error.response.headers,
                });
                return {
                    status: error.response.status,
                    data: error.response.data,
                    msg: 'Error response from server',
                    code: 500
                };
            } else if (error.request) {
                console.error('Error request:', error.request);
                return {
                    status: 'No Response',
                    msg: 'No response received from server',
                    code: 500
                };
            } else {
                console.error('Error message:', error.message);
                return {
                    status: 'Request Setup Error',
                    msg: error.message,
                    code:500
                };
            }
        } else {
            console.error('Unexpected error:', error);
            return {
                status: 'Unexpected Error',
                msg: 'An unexpected error occurred',
                code:500
            };
        }
    }
};
