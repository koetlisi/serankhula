import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
export const DummyData = () =>{
    const {userData} = useSelector((state: RootState) => state.login);
    const [dummyData, setDummyData] = useState(
        {
            firstName: userData.name,
            lastName:userData.surname,
            jobTitle:'Full stack developer',
            address:'Matlameng, Leribe Pitseng 320, Box 114',
            phone:'(266) '+userData.phone,
            email:userData.email,
            themeColor:"#ff6666",
            summery:'I’m a full-stack developer with a strong passion for backend development, particularly in logic analysis and design. My expertise includes Node.js, Python, C++, JavaScript, TypeScript, Django, React, Flutter, and Laravel, enabling me to handle both frontend and backend seamlessly. I thrive on tackling complex backend challenges and am skilled in building robust, scalable, and secure applications using tools like Google Cloud services, containers, and databases. I’m constantly exploring new technologies, including AI, and I prioritize best practices to deliver efficient, well-designed solutions.',
            experience:[
                {
                    id:1,
                    title:'Full Stack Developer',
                    companyName:'Serankhula',
                    country:'Lesotho',
                    startDate:'Jan 2021',
                    address:"Leribe Lesotho Box 114",
                    endDate:'',
                    currentlyWorking:true,
                    workSummery:' Designed, developed, and maintained full-stack applications using React and Node.js.\n'+
                        '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n'+
                        'various devices and browsers.\n'+
                        '• Maintaining the React Native in-house organization application.'+
                        '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
                        'and back-end systems.'
                },
                {
                    id:2,
                    title:'Frontend Developer',
                    companyName:'MAMA',
                    country:'Lesotho',
                    startDate:'May 2019',
                    address:"Leribe Lesotho Box 114",
                    endDate:'Jan 2021',
                    currentlyWorking:false,
                    workSummery:' Designed, developed, and maintained full-stack applications using React and Node.js.'+
                        '• Implemented responsive user interfaces with React, ensuring seamless user experiences across'+
                        'various devices and browsers.'+
                        '• Maintaining the React Native in-house organization application.'+
                        '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
                        'and back-end systems.'
                }
            ],
            education:[
                {
                    id:1,
                    institutionName:'Western Illinois University',
                    startDate:'Aug 2018',
                    endDate:'Dec:2019',
                    qualification:'Master',
                    major:'Computer Science',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
                },
                {
                    id:2,
                    institutionName:'Western Illinois University',
                    startDate:'Aug 2018',
                    endDate:'Dec:2019',
                    qualification:'Master',
                    major:'Computer Science',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
                }
            ],
            skills:[
                {
                    id:1,
                    name:'Angular',
                    rating:80,
                },
                {
                    id:1,
                    name:'React',
                    rating:83,
                },
                {
                    id:1,
                    name:'MySql',
                    rating:70,
                },
                {
                    id:1,
                    name:'React Native',
                    rating:99,
                }
            ]
        }
    );

    return {dummyData, setDummyData}
}