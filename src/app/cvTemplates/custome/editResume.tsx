import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
import {FormSections} from "@/app/cvTemplates/custome/EditResume/formSections";
import {ResumePreview} from "@/app/cvTemplates/custome/EditResume/resumePreview";
import {NavBar} from "@/components/Components/NavThings/NavBar";
import ResumeInfoContext from "@/app/cvTemplates/context/resumeInfoContext";
import {DummyData} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const EditResume: React.FC = () => {
    const {selectedResume} = useSelector((state: RootState) => state.system);
    const {resumes} = useSelector((state: RootState) => state.resume);
    const {dummyData} = DummyData()
    const [resumeInfo, setResumeInfo] = useState(dummyData);
    return <div>
        <NavBar/>
        <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
            <div className="grid grid-cols-1 md:grid-cols-2 p-0 gap-10">
                {/* From Section */}
                <FormSections/>

                {/* Preview Section */}
                <ResumePreview/>
            </div>
        </ResumeInfoContext.Provider>
    </div>
}