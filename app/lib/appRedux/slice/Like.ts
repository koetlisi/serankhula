// likesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Like} from "@/app/lib/types/post";
interface LikesState {
    likes: Like[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: LikesState = {
    likes: [],
    status: 'idle',
};

const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        setLikes(state, action: PayloadAction<Like[]>) {
            state.likes = action.payload;
        },
        addLike(state, action: PayloadAction<Like>) {
            state.likes.push(action.payload);
        },
        removeLike(state, action: PayloadAction<{ postId: string; userId: string }>) {
            state.likes = state.likes.filter(
                like => like.postId !== action.payload.postId || like.userId !== action.payload.userId
            );
        },
    },
});

export const { setLikes, addLike, removeLike } = likesSlice.actions;
export default likesSlice.reducer;
