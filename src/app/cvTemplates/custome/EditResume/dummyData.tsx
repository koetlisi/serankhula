import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";

export const DummyData = () => {
    const { userData } = useSelector((state: RootState) => state.login);
    const { resumeInfo } = useSelector((state: RootState) => state.templateOne);

    const [dummyData, setDummyData] = useState({
        firstName: resumeInfo.firstName.length>0?resumeInfo.firstName:userData.name,
        lastName: resumeInfo.lastName.length>0?resumeInfo.lastName: userData.surname,
        jobTitle: resumeInfo.jobTitle.length>0 ?resumeInfo.jobTitle: 'Full stack developer',
        address: resumeInfo.address.length>0?resumeInfo.address: 'Matlameng, Leribe Pitseng 320, Box 114',
        phone: resumeInfo.phone.length>0 ? `(266) ${resumeInfo.phone}` : `(266) ${userData.phone}`,
        email: resumeInfo.email.length>0?resumeInfo.email: userData.email,
        themeColor: resumeInfo.themeColor.length>0 ?resumeInfo.themeColor: "#ff6666",
        summery: resumeInfo.summery.length>0?resumeInfo.summery:
            'I’m a full-stack developer with a strong passion for backend development, particularly in logic analysis and design. My expertise includes Node.js, Python, C++, JavaScript, TypeScript, Django, React, Flutter, and Laravel, enabling me to handle both frontend and backend seamlessly. I thrive on tackling complex backend challenges and am skilled in building robust, scalable, and secure applications using tools like Google Cloud services, containers, and databases. I’m constantly exploring new technologies, including AI, and I prioritize best practices to deliver efficient, well-designed solutions.',

        experience: resumeInfo.experience.length > 0
            ? resumeInfo.experience.map((experience, index) => ({
                id: index + 1,
                title: experience.title ?? 'Full Stack Developer',
                companyName: experience.companyName ?? 'Serankhula',
                country: experience.country ?? 'Lesotho',
                startDate: experience.startDate ?? 'Jan 2021',
                address: experience.address ?? "Leribe Lesotho Box 114",
                endDate: experience.endDate ?? '',
                currentlyWorking: experience.currentlyWorking ?? true,
                workSummery: experience.workSummery ??
                    'Designed, developed, and maintained full-stack applications using React and Node.js.\n' +
                    '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n' +
                    'various devices and browsers.\n' +
                    '• Maintaining the React Native in-house organization application.\n' +
                    '• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end\n' +
                    'and back-end systems.'
            }))
            : [
                {
                    id: 1,
                    title: 'Full Stack Developer',
                    companyName: 'Serankhula',
                    country: 'Lesotho',
                    address: 'Leribe, Hlotse',
                    startDate: 'Jan 2021',
                    endDate: '',
                    currentlyWorking: true,
                    workSummery: 'Serankhula is a software business solution specializing in full-stack development with a focus on backend logic and design. Skilled in technologies like Node.js, Python, and React, Serankhula delivers robust, scalable, and secure applications. With a commitment to modern practices and a growing interest in AI, Serankhula turns complex business challenges into innovative solutions'
                },
                {
                    id: 2,
                    title: 'Supporting Mobile Developer',
                    companyName: 'Serankhula',
                    country: 'Lesotho',
                    address: 'Leribe, Hlotse',
                    startDate: 'Jan 2021',
                    endDate: '',
                    currentlyWorking: true,
                    workSummery: 'At Serumula Business Solutions, we measure the value of our solutions by how it benefits our customers. It’s about what they need to do and what they need to achieve. '
                }
            ],

        education: resumeInfo.education.length > 0
            ? resumeInfo.education.map((education, index) => ({
                id: index + 1,
                institutionName: education.institutionName ?? 'Western Illinois University',
                startDate: education.startDate ?? 'Aug 2018',
                endDate: education.endDate ?? 'Dec 2019',
                qualification: education.qualification ?? 'Master',
                major: education.major ?? 'Computer Science',
                description: education.description ??
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
            }))
            : [
                {
                    id: 1,
                    institutionName: 'Matlameng LEC Primary School',
                    startDate: 'Jan 2001',
                    endDate: 'Oct 2007',
                    qualification: 'Primary Leaving Certificate',
                    major: 'STD 7',
                    description: 'Nestled in the serene highlands of Lesotho, our school stands as a beacon of hope and opportunity in the heart of the rural mountain kingdom. Despite the challenges of isolation and limited resources, we have cultivated a nurturing environment where young minds are inspired to dream big and achieve greatness. Here, education is more than just a pathway; it\'s a transformative journey that empowers students to overcome obstacles and reach for the stars. Our school is not just a place of learning, but a community where resilience, determination, and the spirit of excellence are fostered daily.'
                },
                {
                    id: 2,
                    institutionName: 'Sacred Heart Commercial High School',
                    startDate: 'Jan 2008',
                    endDate: 'Oct 2013',
                    qualification: 'Junior Certificate',
                    major: 'COSC',
                    description: 'Completed my COSC with a strong focus on both STEM subjects and general education. The rigorous academic environment at Sacred Heart Commercial High School provided me with a well-rounded education, emphasizing critical thinking, analytical skills, and practical application. The supportive community and dedicated teachers played a crucial role in my academic success, fostering a commitment to excellence and a deep sense of responsibility. My time at Sacred Heart was instrumental in developing the foundational knowledge and skills that have shaped my career aspirations and personal growth.'
                },
                {
                    id: 3,
                    institutionName: 'National University of Lesotho',
                    startDate: 'Jul 2014',
                    endDate: 'May 2019',
                    qualification: 'Bachelor of Science (B.Sc)',
                    major: 'Computer Science & Mathematics',
                    description: 'At NUL is where I developed a deep understanding of mathematical theories and their application to computer science. The rigorous curriculum equipped me with strong analytical and problem-solving skills, enabling me to tackle complex computational challenges. My studies at NUL provided a solid foundation in both theoretical and practical aspects of computing, preparing me for a successful career in the tech industry. This experience also fostered my passion for continuous learning and innovation.'
                }
            ],

        skills: resumeInfo.skills.length > 0
            ? resumeInfo.skills.map((skill, index) => ({
                id: index + 1,
                name: skill.name ?? 'Skill Name',
                rating: skill.rating ?? 70
            }))
            : [
                { id: 1, name: 'Laravel', rating: 80 },
                { id: 2, name: 'React', rating: 90 },
                { id: 3, name: 'MySql', rating: 70 },
                { id: 4, name: 'React NextJs', rating: 90 },
                { id: 5, name: 'Django', rating: 60 },
                { id: 6, name: 'Fast Api', rating: 70 },
                { id: 7, name: 'Python', rating: 80 },
                { id: 8, name: 'Php', rating: 80 }
            ]
    });

    return { dummyData, setDummyData };
};
