// postsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Post} from "@/app/lib/types/post";

interface PostsState {
    posts: Post[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsState = {
    posts: [],
    status: 'idle',
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload);
        },
        updatePost(state, action: PayloadAction<Post>) {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        deletePost(state, action: PayloadAction<string>) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
});

export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
