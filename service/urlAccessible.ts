import axios from 'axios';

export async function UrlAccessible(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}
