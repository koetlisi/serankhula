import axios from 'axios';

// Define an interface for user data
interface UserData {
    name?: string;
    surname?: string;
    nationality?: string;
    national_id?: string;
    dob?: string; // Consider using Date type if more appropriate
    gender?: 'male' | 'female' | 'other';
    email?: string;
    password?: string;
    password_confirmation?: string;
}

async function updateUser(userId: number, updatedData:UserData): Promise<UserData>{
    const token = ''
    try {
        const response = await axios.put(`/api/users/${userId}`, updatedData, {
            headers: {
                'Authorization': `Bearer ${token}`, // Include bearer token
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}
