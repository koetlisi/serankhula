import {deepClone} from "../lib/parse-resume-from-pdf/deep-clone";
import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "../lib/appRedux/slice/resumeSlice";
import {Resume} from "@/app/lib/types/types";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Koetlisi Theko",
    summary: 'I’m a full-stack developer with a strong passion for backend development, particularly in logic analysis and design. My expertise includes Node.js, Python, C++, JavaScript, TypeScript, Django, React, Flutter, and Laravel, enabling me to handle both frontend and backend seamlessly. I thrive on tackling complex backend challenges and am skilled in building robust, scalable, and secure applications using tools like Google Cloud services, containers, and databases. I’m constantly exploring new technologies, including AI, and I prioritize best practices to deliver efficient, well-designed solutions.',
    email: "thekoetlisi@gmail.com",
    phone: "+266 59001394",
    location: "Matlameng Ha Letsie",
    url: "linkedin.com/in/yourusername",
  },
  workExperiences: [
    {
      company: "Serankhula Business Solution",
      jobTitle: "Software Developer",
      date: " Jan 2024 - Present",
      descriptions: [
        "Serankhula is a software business solution specializing in full-stack development.",
        "Focus on backend logic and design.",
        "Skilled in technologies like Node.js, Python, and React.",
        "Delivers robust, scalable, and secure applications.",
        "Committed to modern practices.",
        "Growing interest in AI.",
        "Turns complex business challenges into innovative solutions."
      ]
    },
  ],
  educations: [
    {
      school: "National University of Lesotho",
      degree: "Bsc Mathematics and Computer Science",
      date: "Aug 2014 - May 2019",
      gpa: "N/A",
      descriptions: [
        "At NUL is where I developed a deep understanding of mathematical theories and their application to computer science.",
        "The rigorous curriculum equipped me with strong analytical and problem-solving skills.",
        "Enabled me to tackle complex computational challenges.",
        "My studies at NUL provided a solid foundation in both theoretical and practical aspects of computing.",
        "Prepared me for a successful career in the tech industry.",
        "This experience also fostered my passion for continuous learning and innovation.",
      ],
    },
  ],
  projects: [
    {
      project: "Career-Path",
      date: "Jan 2024",
      descriptions: [
        "Career Path helps users build their CVs by identifying key skills and experiences.",
        "The app analyzes job market trends to recommend relevant courses and certifications.",
        "Career Path bridges the gap between academic learning and industry demands.",
        "It provides personalized guidance for career development and growth.",
        "Career Path aims to empower users with the tools and knowledge needed for success in a competitive job market."
      ],
    },
  ],
  skills: {
    featuredSkills: [
      {skill: "Python", rating: 3},
      {skill: "TypeScript", rating: 3},
      {skill: "React", rating: 3},
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  custom: {
    descriptions: [],
  },
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
      deepClone(initialWorkExperience)
  ),
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
};