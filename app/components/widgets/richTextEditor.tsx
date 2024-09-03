import React, {useState} from "react";
import {
    BtnBold, BtnBulletList, BtnClearFormatting,
    BtnItalic, BtnLink, BtnNumberedList,
    BtnRedo, BtnStrikeThrough, BtnStyles,
    BtnUnderline, BtnUndo, Editor,
    EditorProvider, HtmlButton, Separator, Toolbar
} from "react-simple-wysiwyg";
import {Button} from "@/components/ui/button";
import {Spin} from "antd";
import {Brain} from "lucide-react";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";
import {AIChatSession} from "@/service/AIModel";
interface ExperienceData {
    experience: string[];
}
export const RichTextEditor: React.FC<{setResumeInfo: any,resumeInfo: ResumeInfo|any, value: string, onChange: (value: string) => void }> = ({ value, onChange, resumeInfo, setResumeInfo }) => {
    const skills = JSON.stringify(resumeInfo?.skills);
    const [isLoading, setLoading] = useState(false);
    const [aiGeneratedSummery, setAIGeneratedSummery] = useState('')
    const prompt = `The known information about me, Title: ${value}, Skills: ${skills}, depending on the given information,give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags`
    const GenerateSummeryFromAI = async () =>{
        console.log(prompt)
        setLoading(true)
        const result = await AIChatSession.sendMessage(prompt);
        console.log((result.response.text()))
        const data: ExperienceData = JSON.parse(result.response.text());
        setAIGeneratedSummery(JSON.stringify(data.experience).replace(']','').replace('[','').replace('"',''))
        setLoading(false)
    }
    return (
       <div>
           <div className="flex justify-between my-4">
               <label className="text-sm">Summery</label>
               <Button onClick={GenerateSummeryFromAI} type="button" variant="outline" className="border-primary text-primary flex gap-3" size="sm">{isLoading ? (
                   <Spin className="h-4 w-4 animate-spin" />
               ) : (
                   <Brain className="h-4 w-4" />
               )}Generate Form AI</Button>
           </div>
           <EditorProvider>
               <Editor
                   className="text-sm p-2 border rounded-md"
                   value={aiGeneratedSummery.length>0?aiGeneratedSummery:value}
                   onChange={(e) => {
                       if (aiGeneratedSummery.length > 0) {
                           setAIGeneratedSummery(e.target.value);
                           onChange(e.target.value);
                       } else {
                           onChange(e.target.value);
                       }
                   }}
               >
                   <Toolbar>
                       <BtnUndo />
                       <BtnRedo />
                       <Separator />
                       <BtnBold />
                       <BtnItalic />
                       <BtnUnderline />
                       <BtnStrikeThrough />
                       <Separator />
                       <BtnNumberedList />
                       <BtnBulletList />
                       <Separator />
                       <BtnLink />
                       <BtnClearFormatting />
                       <HtmlButton />
                       <Separator />
                       <BtnStyles />
                   </Toolbar>
               </Editor>
           </EditorProvider>
       </div>
    );
};
