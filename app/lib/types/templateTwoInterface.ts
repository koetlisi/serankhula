export interface Experience {
    id: number;
    title: string;
    companyName: string;
    country: string;
    address:string
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    workSummery: string;
}

export interface Education {
    id: number;
    institutionName: string;
    startDate: string;
    endDate: string;
    qualification: string;
    major: string;
    description: string;
}

export interface Skill {
    id: number;
    name: string;
    rating: number;
}

export interface ResumeInfo {
    firstName: string;
    lastName: string;
    profileImg:string;
    jobTitle: string;
    address: string;
    phone: string;
    email: string;
    themeColor: string;
    summery: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
}

export interface ResumeState {
    resumeInfo: ResumeInfo;
}