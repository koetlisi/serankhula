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
    id: string;
    userId: number;
    text: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
    comments?: Comment[];
    likes?: Like[];
}

export interface Like {
    id: string;
    userId: string;
    postId: string;
}
