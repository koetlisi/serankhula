import {PlusSquareIcon} from "lucide-react";
import {useState} from "react";
import {ResumeDialog} from "@/app/cvTemplates/custome/resumeDialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";
import { v4 as uuidv4 } from 'uuid';
import {addResume, Resume} from "@/GlobalRedux/Features/resume/resume";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedResume} from "@/GlobalRedux/Features/system";
import {RootState} from "@/GlobalRedux/store";
import {ResumeItemCard} from "@/app/cvTemplates/custome/resumeItemCard";
import {updateSelectedComponent} from "@/GlobalRedux/Features/pageControl/pageControlSlice";

export const AddResume = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const {userData} = useSelector((state: RootState) => state.login);
    const handleClick = (e:string) => dispatch(updateSelectedComponent(e))
    const uidTemp = uuidv4();
    const [newResume, setNewResume] = useState<Resume>({user_id: userData.id??1, uid: uidTemp, id: 0, title: ""});


    const addNewResumes = () => {
        dispatch(updateSelectedResume(uidTemp))
        // @ts-ignore
        dispatch(addResume(newResume))
        setOpen(false)
        handleClick('EditResume');
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