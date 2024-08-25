import {PlusSquareIcon} from "lucide-react";
import {useState} from "react";
import {ResumeDialog} from "@/app/cvTemplates/custome/resumeDialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";
import { v4 as uuidv4 } from 'uuid';
import {addResume, Resume} from "@/GlobalRedux/Features/resume/resume";
import {useDispatch} from "react-redux";
import {updateSelectedResume} from "@/GlobalRedux/Features/system";

export const AddResume = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [newResume, setNewResume] = useState<Resume>({selectedResume: "", uid: '', id: 0, title: ""});

    const addNewResumes = () => {
        const uidTemp = uuidv4();
        setNewResume((prevState) => ({
            ...prevState,
            uid: uidTemp,
        }));
        dispatch(updateSelectedResume(uidTemp))
        // @ts-ignore
        dispatch(addResume()) // Note: The console log here might show the previous state due to how React batches state updates.
    };

    const onChangeTitle = (e: any) => {
        const { value } = e.target;
        setNewResume((prevState) => ({
            ...prevState,
            title: value,
        }));
    };
    return <div>
        <div onClick={() => setOpen(true)} className="resume-add border-dashed">
            <PlusSquareIcon/>
        </div>
        <ResumeDialog isOpen={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Create New Resume?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <label>Add a title for your new resume</label>
                        <Input onChange={onChangeTitle} name={newResume.title}  className="my-3" type="text" placeholder="Resume name"/>
                    </AlertDialogDescription>
                    <div className="flex justify-end gap-5">
                        <Button onClick={() => setOpen(!open)} variant="ghost">Cancel</Button>
                        <Button disabled={!newResume.title} onClick={addNewResumes}>Create</Button>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </ResumeDialog>

    </div>
}