import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import React from "react";
import { Input } from "antd";
import { FaUser, FaLock } from "react-icons/fa";
import { EmailOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { RootState } from "@/app/lib/appRedux/store";
import { AuthControls } from "@/app/auth/thunks/register/register";
import ProfileUpload from "@/app/components/profileUpload";
import { Submit } from "@/app/auth/thunks/register/submit";
import { useToast } from "@/components/ui/use-toast";
import { FormSpinner } from "@/app/components/FormSpinner";

interface Prop {
    isDialogOpen: boolean;
    setDialogOpen: (isDialogOpen: boolean) => void;
}

export const Register: React.FC<Prop> = ({ isDialogOpen, setDialogOpen }) => {
    const { isLoading } = useSelector((state: RootState) => state.auth);
    const { form, setForm } = AuthControls();
    const dispatch = useDispatch();
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <AlertDialogContent className="wrapper">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className="flex justify-center items-center">
                            {!isLoading && <ProfileUpload />}
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {isLoading && (
                            <div className="flex justify-center items-center py-4">
                                <FormSpinner />
                            </div>
                        )}
                        {!isLoading && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-black font-bold">First Name:</label>
                                    <Input
                                        id="name"
                                        value={form.name}
                                        name="name"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Serankhula"
                                        prefix={<FaUser className="text-gray-400" />}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block mb-1 text-black font-bold">Surname:</label>
                                    <Input
                                        id="surname"
                                        value={form.surname}
                                        name="surname"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Lesotho"
                                        prefix={<FaUser className="text-gray-400" />}
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2 ">
                                    <label htmlFor="email" className="block mb-1 text-black font-bold">Email:</label>
                                    <Input
                                        id="email"
                                        value={form.email}
                                        name="email"
                                        onChange={handleInputChange}
                                        type="email"
                                        placeholder="serankhula@serankhula.com"
                                        prefix={<EmailOutlined className="text-gray-400" />}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-1 text-black font-bold">Password:</label>
                                    <Input
                                        id="password"
                                        value={form.password}
                                        name="password"
                                        onChange={handleInputChange}
                                        type="password"
                                        placeholder="password"
                                        prefix={<FaLock className="text-gray-400" />}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm_password" className="block mb-1 text-black font-bold">Password Confirmation:</label>
                                    <Input
                                        id="confirm_password"
                                        value={form.confirm_password}
                                        name="confirm_password"
                                        onChange={handleInputChange}
                                        type="password"
                                        placeholder="password confirmation"
                                        prefix={<FaLock className="text-gray-400" />}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {!isLoading && (
                    <div className="flex justify-between mt-4">
                        <AlertDialogCancel>Login</AlertDialogCancel>
                        <Button onClick={() => Submit(form, toast, dispatch, setDialogOpen)}>Continue</Button>
                    </div>
                )}
            </AlertDialogContent>
        </AlertDialog>
    );
};
