// commentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Comment} from "@/app/lib/types/post";
interface CommentsState {
    comments: Comment[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CommentsState = {
    comments: [],
    status: 'idle',
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, action: PayloadAction<Comment[]>) {
            state.comments = action.payload;
        },
        addComment(state, action: PayloadAction<Comment>) {
            state.comments.push(action.payload);
        },
        updateComment(state, action: PayloadAction<Comment>) {
            const index = state.comments.findIndex(comment => comment.id === action.payload.id);
            if (index !== -1) {
                state.comments[index] = action.payload;
            }
        },
        deleteComment(state, action: PayloadAction<string>) {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
    },
});

export const { setComments, addComment, updateComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;
