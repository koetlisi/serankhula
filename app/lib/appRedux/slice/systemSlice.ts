import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
    selectedContent: string;
    prevContent: string[];
    forwardContent: string[];
    selectedResumeId: number;
}

const initialState: SystemState = {
    selectedContent: "Login",
    prevContent: [],
    forwardContent: [],
    selectedResumeId: 0
};

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
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
    updateSelectedResumeId,
    popPreviousContent,
    popForwardContent
} = systemSlice.actions;
