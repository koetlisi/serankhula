import {Dispatch} from "redux";
import {RootState} from "@/app/lib/appRedux/store";
import {TemplateOne} from "@/app/lib/dummyData/templateOne";
import {addOrUpdateTemplate} from "@/app/lib/appRedux/slice/resumeTemplates";
import {TemplateTwo} from "@/app/lib/dummyData/templateTwo";

export const ResumeTemplates = () => async (dispatch: Dispatch, getState: () => RootState) =>{
    const dummyData = TemplateOne(getState().auth,getState().resumeTemplateOne)
    const newTemplate = [
        {
            id: 1,
            name: "default",
            title:'Default',
            qualification: "Postgraduate",
            requiredData: dummyData,
        },
        {
            id: 2,
            name: "templateTwo",
            title:'Default with Image',
            qualification: "Postgraduate",
            requiredData: TemplateTwo(getState().auth,getState().resumeTemplateTwo),
        }
    ];

    // Update or add the template
    dispatch(addOrUpdateTemplate(newTemplate));
}