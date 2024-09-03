// postsThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {addPost, deletePost, setPosts, updatePost} from "@/app/lib/appRedux/slice/post";
import {Post} from "@/app/lib/types/post";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { dispatch }) => {
    const response = await axios.get<Post[]>('/api/posts');
    dispatch(setPosts(response.data));
});

export const createPost = createAsyncThunk('posts/createPost', async (post: Post, { dispatch }) => {
    const response = await axios.post<Post>('/api/posts', post);
    dispatch(addPost(response.data));
});

export const editPost = createAsyncThunk('posts/editPost', async (post: Post, { dispatch }) => {
    const response = await axios.put<Post>(`/api/posts/${post.id}`, post);
    dispatch(updatePost(response.data));
});

export const removePost = createAsyncThunk('posts/removePost', async (postId: string, { dispatch }) => {
    await axios.delete(`/api/posts/${postId}`);
    dispatch(deletePost(postId));
});
