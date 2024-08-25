import {
    AlertDialog,
    AlertDialogContent
} from "@/components/ui/alert-dialog";
import React from "react";

interface Prop {
    isOpen: boolean;
    children: React.ReactNode;
}

export const ResumeDialog: React.FC<Prop> = ({ isOpen, children }) => {
    return (
        <AlertDialog open={isOpen}>
            {children}
        </AlertDialog>
    );
}
