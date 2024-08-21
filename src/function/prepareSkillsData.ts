interface FormattedSkill {
    id: number;
    name: string;
    ratting: number;
    description: string;
}

export const formatSkillsData = (data: any): { [key: string]: FormattedSkill } => {
    const formattedData: { [key: string]: FormattedSkill } = {};

    Object.keys(data.id).forEach((key) => {
        const index = key.split('-')[1]; // Extract the index from the key

        formattedData[`skill-${index}`] = {
            id: data.id[key],
            name: data.name[`name-${index}`],
            ratting: data.ratting[`ratting-${index}`],
            description: data.description[`description-${index}`],
        };
    });

    return formattedData;
};