// types.ts
export interface User {
    id: number;
    name: string;
    profilePictureUrl?: string;
}

export interface Comment {
    id: string;
    userId: string;
    postId: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    replies?: Comment[]; // Nested comments
}

export interface Post {
    id: number;
    user_id: number;
    content: string;
    imageUrl?: string;
    created_at: string;
    updated_at: string;
    comments?: Comment[];
    likes?: Like[];
}

export interface Like {
    id: string;
    userId: string;
    postId: string;
}
