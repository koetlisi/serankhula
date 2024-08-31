import {Dispatch} from "redux";
import {RootState} from "@/app/lib/appRedux/store";
import {TemplateOne} from "@/app/lib/dummyData/templateOne";
import {addOrUpdateTemplate} from "@/app/lib/appRedux/slice/resumeTemplates";

export const ResumeTemplates = () => async (dispatch: Dispatch, getState: () => RootState) =>{
    const { dummyData} = TemplateOne(getState().auth,getState().resumeTemplateOne)
    const newTemplate = [
        {
            id: 1,
            name: "Others",
            qualification: "Postgraduate",
            requiredData: dummyData,
        }
    ];

    // Update or add the template
    dispatch(addOrUpdateTemplate(newTemplate));
}