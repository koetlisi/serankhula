import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Brain} from "lucide-react";
import {Spin} from "antd";
import {ResumeInfo} from "@/app/lib/types/templateTwoInterface";
import {AIChatSession} from "@/service/AIModel";
export interface SummaryData {
    summary: string;
    experience_level: string;
}

export const Summery: React.FC<{ resumeInfo: ResumeInfo, setResumeInfo: any }> = ({resumeInfo, setResumeInfo}) => {
    const skills = JSON.stringify(resumeInfo.skills);
    const [isLoading, setLoading] = useState(false);
    const [aiGeneratedSummery, setAIGeneratedSummery] = useState<SummaryData[]>([])
    const prompt = `The known information about me, Title: ${resumeInfo.jobTitle}, Skills: ${skills}, depending on the given information,give me list of  summery for 3 experience level, Mid Level and Freasher level in 5 -6 lines in array format, With summery and experience_level Field in JSON Format`
    const GenerateSummeryFromAI = async () =>{
        setLoading(true)
        const result = await AIChatSession.sendMessage(prompt);
        console.log(JSON.stringify(result.response.text()))
        setAIGeneratedSummery(JSON.parse(result.response.text()))
        setLoading(false)
    }
    const onChange = (e:any)=>{
        setResumeInfo({
            ...resumeInfo, summery:e.target.value
        })
    }
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (text:string, index:any) => {
        setResumeInfo({
            ...resumeInfo, summery:text
        })
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    };
    return <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-5">
        <h2 className="font-bold text-lg">Summery</h2>
        <p className="">Add Summery For Your Job Title</p>
        <form className="mt-7">
            <div className="flex justify-between items-end">
                <label>Add Summery</label>
                <Button onClick={GenerateSummeryFromAI} type="button" variant="outline" className="border-primary text-primary flex gap-3" size="sm">{isLoading ? (
                    <Spin className="h-4 w-4 animate-spin" />
                ) : (
                    <Brain className="h-4 w-4" />
                )}Generate Form AI</Button>
            </div>
            <Textarea onChange={onChange} value={resumeInfo.summery} defaultValue={resumeInfo.summery} className="mt-4 h-48"/>
            <div className="flex justify-end mt-3">
                <Button>Save</Button>
            </div>
        </form>
        {aiGeneratedSummery.length > 0 && (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="font-bold text-lg mb-4">Suggestions</h2>
            {aiGeneratedSummery.map((item, key) => (
                <div key={key} className="relative p-4 bg-gray-100 rounded-lg shadow-sm border-t-4 border-primary mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-md">Level: {item?.experience_level}</h3>
                        <button
                            onClick={() => handleCopy(item?.summary, key)}
                            className="p-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                            aria-label="Copy"
                        >
                            {copiedIndex === key ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 9.75H6a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3v-2.25m0-7.5V6a3 3 0 00-3-3h-6a3 3 0 00-3 3v6a3 3 0 003 3h2.25m3-10.5H18a3 3 0 013 3v6a3 3 0 01-3 3h-6a3 3 0 01-3-3v-2.25"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <p className="text-sm mt-2 text-justify">
                        {item?.summary}
                    </p>
                </div>
            ))}
        </div>
        )}
    </div>
}