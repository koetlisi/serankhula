"use client"

import {FaUser} from "react-icons/fa6";
import {FaLock} from "react-icons/fa";
import "./login.css.scss";
import {Input} from "antd";
import React, {useEffect, useState} from "react";
import {useToast} from "@/components/ui/use-toast"
import {useDispatch, useSelector} from "react-redux";
import {LoginFunction} from "@/app/GlobalRedux/Features/auth/login";
import {RootState} from "@/app/GlobalRedux/store";
import {Register} from "@/app/auth/register";
import {AlertDialogTrigger} from "@/components/ui/alert-dialog";
import {AuthControls} from "@/app/auth/authControls";
const Login = () => {
    const {form,setDialogOpen,setForm} = AuthControls()
    const {isLoading} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch()
    const { toast } = useToast()
    const handleLogin = () => {
        // @ts-ignore
        dispatch(LoginFunction(form,toast))
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <div className='body'>
            <div className="wrapper">
                <div className="form-box login">
                    <div>
                        <h1>Login</h1>
                        <div className="input-box">
                            <Input
                                value={form.email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                placeholder="thekoetlisi@gmail.com"
                                prefix={<FaUser className="icon"/>}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <Input
                                value={form.password}
                                name="password"
                                onChange={handleInputChange}
                                type='password'
                                prefix={<FaLock className="icon"/>}
                                placeholder="password"
                                required
                            />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="#">Forget password?</a>
                        </div>

                        <button onClick={handleLogin} disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>

                        <div className="register-link">
                            <p>Dont have an account?<Register>
                                <AlertDialogTrigger onClick={()=>setDialogOpen(true)} className="text-blue-500 underline cursor-pointer bg-transparent border-none p-0 hover:text-blue-700 focus:outline-none" asChild>
                                    <span>Register</span>
                                </AlertDialogTrigger>
                            </Register></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login
