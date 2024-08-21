import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface dumSkill{
    id:{[key:string]:any};
    name: { [key: string]: any };
    ratting:{ [key: string]: any };
    description: { [key: string]: any};
}

interface SkillState {
    skillData: dumSkill;
}

const initialState: SkillState = {

    skillData: {
        id:{},
        name:{},
        ratting:{},
        description: {},
    }
};

const dumSkillSlice = createSlice({
    name:'dumSkills',
    initialState,
    reducers:{
        updateDumSkill: (state, action: PayloadAction<Partial<dumSkill>>) => {
            state.skillData = {
                ...state.skillData,
                ...action.payload,
            };
        },
        updateSkillId:(state, action: PayloadAction<{id:{[key:string]:any}}>)=>{
            state.skillData.id = {
                ...state.skillData.id,
                ...action.payload.id
            }
        },
        updateSkillName:(state, action: PayloadAction<{name:{[key:string]:any}}>)=>{
            state.skillData.name = {
                ...state.skillData.name,
                ...action.payload.name
            }
        },
        updateSkillRatting:(state, action: PayloadAction<{ratting:{[key:string]:any}}>)=>{
            state.skillData.ratting = {
                ...state.skillData.ratting,
                ...action.payload.ratting
            }
        },
        updateSkillDescription:(state, action: PayloadAction<{description:{[key:string]:any}}>)=>{
            state.skillData.description = {
                ...state.skillData.description,
                ...action.payload.description
            }
        }
    }
});

export const {updateSkillId,updateSkillName,updateSkillRatting,updateSkillDescription,updateDumSkill} = dumSkillSlice.actions;
export default dumSkillSlice.reducer;