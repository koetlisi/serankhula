// commentsThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {addComment, deleteComment, setComments} from "@/app/lib/appRedux/slice/comment";

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId: string, { dispatch }) => {
    const response = await axios.get<Comment[]>(`/api/posts/${postId}/comments`);
    //dispatch(setComments(response.data));
});

export const createComment = createAsyncThunk('comments/createComment', async (comment: Comment, { dispatch }) => {
    const response = await axios.post<Comment>('/api/comments', comment);
    //dispatch(addComment(response.data));
});

export const editComment = createAsyncThunk('comments/editComment', async (comment: Comment, { dispatch }) => {
    //const response = await axios.put<Comment>(`/api/comments/${comment.id}`, comment);
   // dispatch(updateComment(response.data));
});

export const removeComment = createAsyncThunk('comments/removeComment', async (commentId: string, { dispatch }) => {
    await axios.delete(`/api/comments/${commentId}`);
    dispatch(deleteComment(commentId));
});
