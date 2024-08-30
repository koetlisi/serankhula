import {Dispatch} from "redux";
import {updateIsLoading, updateIsLogin, updateUserData} from "@/app/lib/appRedux/slice/loginSlice";
import {AxiosPost} from "@/service/axiosPost";

export const userLogin = (data: any, toast:any)=> async (dispatch:Dispatch)=>{
    dispatch(updateIsLoading(true));
    try{
        const response = await AxiosPost('','login/',data);
        if(response.code === 200){
            dispatch(updateIsLogin(true));
            dispatch(updateUserData(response.data))
        }else if(response.code === 422){
            toast({
                variant: "destructive",
                description: response.msg,
            })
        }else{
            toast({
                variant: "destructive",
                description: response.msg,
            })
        }
    }catch (e){
        console.log(e)
        dispatch(updateIsLoading(false));
    }finally {
        dispatch(updateIsLoading(false));
    }
}