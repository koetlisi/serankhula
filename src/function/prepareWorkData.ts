import {WorkData} from "@/GlobalRedux/Features/dummyData/dummyWork";

interface CourseInterval {
    start: string;
    end: string;
}

interface dumWork {
    id: number;
    title: string;
    term: string;
    interval: CourseInterval;
    place: string;
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
            title: input.title[`title-${i}`],
            term: input.term[`term-${i}`],
            interval: input.interval[`interval-${i}`],
            place: input.place[`place-${i}`],
            description: input.description[`description-${i}`],
            ratting: input.ratting[`ratting-${i}`],
            emp_type: input.emp_type[`emp_type-${i}`],
            work_status: input.work_status[`work_status-${i}`],
        };
    }

    return output;
}