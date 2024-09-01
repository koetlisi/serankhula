import {useState} from "react";

export const AuthControls = ()=>{
    const [form, setForm] = useState({email: '', password: '', confirm_password: '', name: '', surname: ''});
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const formData = new FormData();
    return {form, isDialogOpen, setDialogOpen,setForm, passwordError, setPasswordError, formData}
}