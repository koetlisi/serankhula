import {WorkData} from "@/app/GlobalRedux/Features/dummyData/dummyWork";

interface CourseInterval {
    start: string;
    end: string;
}

interface dumWork {
    id: number;
    name: string;
    qualification: string;
    interval: CourseInterval;
    institution: string;
    description: string;
    ratting: string;
    emp_type: string;
    work_status: string;
}

export function prepareDataForSubmission(input: WorkData): { [key: string]: dumWork} {
    const output: { [key: string]: dumWork } = {};
    const entryCount = Object.keys(input.id).length; // Determine the number of entries

    for (let i = 0; i < entryCount; i++) {
        const courseKey = `dumWork-${i}`;
        output[courseKey] = {
            id: input.id[`id-${i}`],
            name: input.title[`title-${i}`],
            qualification: input.term[`term-${i}`],
            interval: input.interval[`interval-${i}`],
            institution: input.place[`place-${i}`],
            description: input.description[`description-${i}`],
            ratting: input.ratting[`ratting-${i}`],
            emp_type: input.emp_type[`emp_typ-${i}`],
            work_status: input.work_status[`work_status-${i}`],
        };
    }

    return output;
}