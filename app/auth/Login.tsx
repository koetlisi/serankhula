import './login.css.scss';
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/appRedux/store";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "antd";
import { Button } from "@/components/ui/button";
import { FaLock, FaUser } from "react-icons/fa";

export const Login: React.FC<{ open: boolean, setOpen: (open: boolean) => void }> = ({ open, setOpen }) => {
    const { isLoading } = useSelector((state: RootState) => state.auth);

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="wrapper w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                <div className="form-box login">
                    <AlertDialogTitle className="text-center text-2xl font-bold mb-4">Login</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="input-box mb-4">
                            <label className="block text-black">Email</label>
                            <Input
                                prefix={<FaUser className="text-gray-400" />}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                                type="text"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input-box mb-6">
                            <label className="block text-black">Password</label>
                            <Input
                                prefix={<FaLock className="text-gray-400" />}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                    </AlertDialogDescription>
                </div>
                <div className="flex justify-end gap-4">
                    <Button onClick={handleCancel} variant="ghost" className="text-black">Cancel</Button>
                    <Button  className="bg-green-600 text-white hover:bg-green-700">Login</Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};
