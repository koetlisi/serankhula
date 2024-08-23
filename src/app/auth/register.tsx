"use client"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import React, {useState} from "react";
import ProfileUpload from "@/components/Components/FormThings/ProfileUpload";
import {Input} from "antd";
import {FaUser} from "react-icons/fa6";
import {FaLock} from "react-icons/fa";
import {EmailOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import {createUser} from "@/GlobalRedux/Features/auth/login";
import {Button} from "@/components/ui/button";
import {AuthControls} from "@/app/auth/authControls";
import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";
import {FormSpinner} from "@/components/Components/FormThings/formSpinner";

interface Prop {
    children: React.ReactNode;
}

export const Register: React.FC<Prop> = ({children}) => {
    const {isLoading} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    const {toast} = useToast();
    const formData = new FormData();
    const {form, isDialogOpen, setDialogOpen,setForm} = AuthControls()
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const submitRegister = async () => {
        const file = await fetchFileFromLocalStorage('file_path');
        if(file !== null){
            formData.append('file', file);
        }
        for (const [key, value] of Object.entries(form)) {
            if (value !== null && value !== undefined && key !== 'confirm_password') {
                formData.append(key, value.toString());
            }
        }
        // @ts-ignore
        dispatch(createUser(formData, toast, setDialogOpen));
    };

    return (
        <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            {children}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className="flex justify-center items-center" style={{display:isLoading?"none":""}}>
                            <ProfileUpload />
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="pt-4">
                        {isLoading && <FormSpinner/>}
                        <div className="row" style={{display:isLoading?"none":""}}>
                            <div className="col-6 col">
                                <label className="label-spacing" htmlFor="first-name">First Name: </label>
                                <div className="input-box">
                                    <Input
                                        value={form.name}
                                        name="name"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Serankhula"
                                        prefix={<FaUser className="icon" />}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6 col">
                                <label className="label-spacing" htmlFor="first-name">Surname: </label>
                                <div className="input-box">
                                    <Input
                                        value={form.surname}
                                        name="surname"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Lesotho"
                                        prefix={<FaUser className="icon" />}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12 col pt-2">
                                <label className="label-spacing" htmlFor="first-name">Email: </label>
                                <div className="input-box">
                                    <Input
                                        value={form.email}
                                        name="email"
                                        onChange={handleInputChange}
                                        type="email"
                                        placeholder="serankhula@serankhula.com"
                                        prefix={<EmailOutlined className="icon" />}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6 col pt-2">
                                <label className="label-spacing" htmlFor="first-name">Password: </label>
                                <div className="input-box">
                                    <Input
                                        value={form.password}
                                        name="password"
                                        onChange={handleInputChange}
                                        type='password'
                                        prefix={<FaLock className="icon" />}
                                        placeholder="password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6 col pt-2">
                                <label className="label-spacing" htmlFor="first-name">Password Confirmation: </label>
                                <div className="input-box">
                                    <Input
                                        value={form.confirm_password}
                                        name="confirm_password"
                                        onChange={handleInputChange}
                                        type='password'
                                        prefix={<FaLock className="icon" />}
                                        placeholder="password confirmation"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-between" style={{display:isLoading?"none":""}}>
                    <AlertDialogCancel>Login</AlertDialogCancel>
                    <Button  onClick={submitRegister}>Continue</Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};
