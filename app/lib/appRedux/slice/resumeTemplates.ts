import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface TemplatesState {
    templates: Template[];
}

// Initial state
const initialState: TemplatesState = {
    templates: [],
};

// Create the slice
const templatesSlice = createSlice({
    name: "resumeTemplates",
    initialState,
    reducers: {
        addOrUpdateTemplate: (state, action: PayloadAction<Template>) => {
            const existingTemplateIndex = state.templates.findIndex(
                (template) => template.id === action.payload.id
            )
            if (existingTemplateIndex !== -1) {
                state.templates[existingTemplateIndex] = action.payload;
            } else {
                state.templates.push(action.payload);
            }
        },
        updateTemplate: (state, action: PayloadAction<Template>) => {
            const index = state.templates.findIndex(template => template.id === action.payload.id);
            if (index !== -1) {
                state.templates[index] = action.payload;
            }
        },
        removeTemplate: (state, action: PayloadAction<string>) => {
            state.templates = state.templates.filter(template => template.id !== action.payload);
        },
    },
});

// Export actions
export const { addOrUpdateTemplate, updateTemplate, removeTemplate } = templatesSlice.actions;

// Export reducer
export default templatesSlice.reducer;
