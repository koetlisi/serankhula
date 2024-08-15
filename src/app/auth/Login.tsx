"use client"

import {FaUser} from "react-icons/fa6";
import {FaLock} from "react-icons/fa";
import "./login.css.scss";
import {Input} from "antd";
import React, {useEffect, useState} from "react";
import {HttpPostMethod} from "@/apiHandling/All/postMethod"; // Adjust this path accordingly
import {useToast} from "@/components/ui/use-toast"
import {useDispatch, useSelector} from "react-redux";
import {LoginFunction} from "@/app/GlobalRedux/Features/auth/login";
import {RootState} from "@/app/GlobalRedux/store";
const Login = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const {toast} = useToast()
    const {isLoading} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch()

    const handleLogin = () => {
        // @ts-ignore
        dispatch(LoginFunction(form))
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
                            <p>Dont have an account?<a href="#">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login
