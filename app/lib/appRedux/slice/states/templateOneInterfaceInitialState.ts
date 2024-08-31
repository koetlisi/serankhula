import {ResumeState} from "@/app/lib/types/templateOneInterface";

export const TemplateOneInterfaceInitialState: ResumeState = {
    resumeInfo: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        address: '',
        phone: '',
        email: '',
        themeColor: '',
        summery: '',
        experience: [],
        education: [],
        skills: []
    }
};