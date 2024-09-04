// likesThunks.ts
import { Like } from '@/app/lib/types/post';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {addLike, removeLike, setLikes} from "@/app/lib/appRedux/slice/Like";

export const fetchLikes = createAsyncThunk('likes/fetchLikes', async (_, { dispatch }) => {
    const response = await axios.get<Like[]>('/api/likes');
    dispatch(setLikes(response.data));
});

export const likePost = createAsyncThunk('likes/likePost', async (like: Like, { dispatch }) => {
    const response = await axios.post<Like>('/api/likes', like);
    dispatch(addLike(response.data));
});

export const unlikePost = createAsyncThunk('likes/unlikePost', async (like: Like, { dispatch }) => {
    await axios.delete(`/api/likes/${like.postId}/${like.userId}`);
    dispatch(removeLike({ postId: like.postId, userId: like.userId }));
});
