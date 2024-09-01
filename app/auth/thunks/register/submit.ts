import {GetFileFromLocalStorage} from "@/service/getFileFromLocalStorage";
import {createUser} from "@/app/lib/appRedux/thunks/auth/register";

export const Submit = async (form:any,toast:any, dispatch:any, setDialogOpen:any) => {
    const formData = new FormData();
    const file = await GetFileFromLocalStorage('file_path');
    if(file !== null){
        formData.append('file', file);
    }
    for (const [key, value] of Object.entries(form)) {
        if (value !== null && value !== undefined && key !== 'confirm_password') {
            formData.append(key, value.toString());
        }
    }
    dispatch(createUser(formData, toast, setDialogOpen));
};