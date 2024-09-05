import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, Like, Post } from "@/app/lib/types/post";

interface PostsState {
    posts: Post[];
    newPost: Post;
}

const initialState: PostsState = {
    posts: [],
    newPost: {
        id: 0,
        user_id: 0,
        content: '',
        imageUrl: '',
        created_at: '',
        updated_at: '',
        comments: [],
        likes: [],
    }
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
        addNewPost(state, action: PayloadAction<Post>) {
            state.newPost = action.payload;
        },
        destroyNewPost(state) {
            state.newPost = initialState.newPost;
        },
        updatePost(state, action: PayloadAction<Post>) {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        deletePost(state, action: PayloadAction<number>) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    }
});

export const {
    setPosts,
    addPost,
    updatePost,
    deletePost,
    addNewPost,
    destroyNewPost
} = postsSlice.actions;

export default postsSlice.reducer;
