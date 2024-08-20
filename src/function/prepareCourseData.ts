export const prepareFormData = (courseData:any) => {
    const groupedData = {};

    Object.keys(courseData.id).forEach((key) => {
        const index = key.split('-')[1];
        // @ts-ignore
        groupedData[`course-${index}`] = {
            id: courseData.id[key],
            name: courseData.name[`name-${index}`],
            qualification: courseData.qualification[`qualification-${index}`],
            interval: courseData.interval[`interval-${index}`],
            institution: courseData.institution[`institution-${index}`],
            description: courseData.description[`description-${index}`]
        };
    });

    return groupedData
};
