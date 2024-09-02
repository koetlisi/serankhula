import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserRequest, UserRequestList } from "../../types/userRequest";

interface SystemState {
    selectedContent: string;
    prevContent: string[];
    forwardContent: string[];
    selectedResumeId: number;
    friendRequestNot: number;
    friendRequestList: UserRequest[];
}

const initialState: SystemState = {
    selectedContent: "Login",
    prevContent: [],
    forwardContent: [],
    selectedResumeId: 0,
    friendRequestNot: 0,
    friendRequestList: []
};

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        updateUserRequestNotification:(state, action:PayloadAction<UserRequest>)=>{
            console.log('Current friendRequestList:', state.friendRequestList);
            console.log('Incoming payload:', action.payload);

            if (!state.friendRequestList) {
                state.friendRequestList = []; // Fallback to an empty array if it's undefined
            }

            state.friendRequestList.push(action.payload);
        },
        updateSelectedComponent: (state, action: PayloadAction<string>) => {
            if (state.selectedContent !== action.payload) {
                state.prevContent.push(state.selectedContent);
                state.selectedContent = action.payload;
                state.forwardContent = []; // Clear forward content when navigating to a new page
            }
        },
        updateSelectedResumeId: (state, action: PayloadAction<number>) => {
            state.selectedResumeId = action.payload;
        },
        updateFriendRequestCount: (state, action: PayloadAction<number>) => {
            state.friendRequestNot = state.friendRequestNot+action.payload;
        },
        popPreviousContent: (state) => {
            if (state.prevContent.length > 0) {
                const lastContent = state.prevContent.pop()!;
                state.forwardContent.push(state.selectedContent);
                state.selectedContent = lastContent;
            } else {
                console.log('No previous content to revert to.');
            }
        },
        popForwardContent: (state) => {
            if (state.forwardContent.length > 0) {
                const lastContent = state.forwardContent.pop()!;
                state.prevContent.push(state.selectedContent);
                state.selectedContent = lastContent;
            } else {
                console.log('No forward content to revert to.');
            }
        }
    }
});

export default systemSlice.reducer;
export const {
    updateSelectedComponent,
    updateFriendRequestCount,
    updateSelectedResumeId,
    popPreviousContent,
    popForwardContent,
    updateUserRequestNotification
} = systemSlice.actions;
