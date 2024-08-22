import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";

export const prepareUserProfileData = async (data:any)=>{
    const file = await fetchFileFromLocalStorage('file_path');
    const formData = new FormData();
    if (file !== null) {
        formData.append('file', file);
    }
    for (const [key, value] of Object.entries(data)) {
        if (value !== null && value !== undefined) {
            formData.append(key, value.toString());
        }
    }

    return formData
}