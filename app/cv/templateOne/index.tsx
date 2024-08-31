import {FormSections} from "@/app/cv/templateOne/EditResume/formSections";
import {ResumePreview} from "@/app/cv/templateOne/EditResume/resumePreview";
import React from "react";

export const Index =() => {
    return <div className="grid grid-cols-1 bg-dot md:grid-cols-2 p-0 gap-10">
        {/*From Section*/}
        <FormSections/>

        {/* Preview Section*/}
        <ResumePreview/>
    </div>
}