// postsThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {addPost, setPosts} from "@/app/lib/appRedux/slice/post";
import {Post} from "@/app/lib/types/post";
import {AxiosPost} from "@/service/axiosPost";
import {Dispatch} from "redux";
import {AxiosGet} from "@/service/axiosGet";
import {InstitutionsResponse} from "@/app/lib/types/httpsResponse";
import {RootState} from "@/app/lib/appRedux/store";

/*export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { dispatch }) => {
    const response = await axios.get<Post[]>('create_post/');
    dispatch(setPosts(response.data));
});*/

export const getPost = ()=>async (dispatch: Dispatch, getState: () => RootState) =>{
    try{
        const response = await AxiosGet<InstitutionsResponse>(getState().auth.userData.token, 'get_all_post/');
        if (response && response?.code === 200) {
            dispatch(setPosts(response.data.data))
        }else {
            console.error("Error creating post:", response?.data);
        }
    }catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}

export const createPost = (post: Post) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        const token = getState().auth.userData.token;
        const endPoint = 'create_post/';
        const response = await AxiosPost(token, endPoint, post);
        console.log(response);

        if (response.code === 201) {
            dispatch(addPost(response.data));
            return response.data;
        } else {
            throw new Error(response.msg || 'Failed to create post');
        }
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};


/*
export const editPost = createAsyncThunk('posts/editPost', async (post: Post, { dispatch }) => {
    const response = await axios.put<Post>(`/api/posts/${post.id}`, post);
    dispatch(updatePost(response.data));
});

export const removePost = createAsyncThunk('posts/removePost', async (postId: string, { dispatch }) => {
    await axios.delete(`/api/posts/${postId}`);
    dispatch(deletePost(postId));
});
*/
