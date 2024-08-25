import {PlusSquareIcon} from "lucide-react";
import {useState} from "react";
import {ResumeDialog} from "@/app/cvTemplates/custome/resumeDialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";

export const AddResume = () => {
    const [open, setOpen] = useState(false);
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
                        <Input className="my-3" type="text" placeholder="Resume name"/>
                    </AlertDialogDescription>
                    <div className="flex justify-end gap-5">
                        <Button onClick={() => setOpen(!open)} variant="ghost">Cancel</Button>
                        <Button>Create</Button>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </ResumeDialog>

    </div>
}