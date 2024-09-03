import {AxiosPost} from "@/service/axiosPost";
import {RootState} from "@/app/lib/appRedux/store";
import {Dispatch} from "redux";
import {LoginSlice} from "@/app/lib/appRedux/slice/loginSlice";
import {Post} from "@/app/lib/types/post";
import {addPost} from "@/app/lib/appRedux/slice/post";

export const createUser = (data: any,toast:any, setDialogOpen:any) => {

    return async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch(LoginSlice.actions.updateIsLoading(true));
        try {
            const response = await AxiosPost(getState().auth.userData.token,'register_user/', data);
            if (response.code === 201) {
                const post:Post = {id: '0', userId: response.data.id, text: 'Changed Profile Picture', imageUrl: response.data.profileImage, createdAt: response.data.created_at, updatedAt: '', comments: [], likes:[],}
                dispatch(addPost(post)) ;
                toast({
                    variant: "success group border-green-500 bg-green-500 text-neutral-50",
                    description: "Successful updated.",
                })

            }else if (response.code === 422){
                toast({
                    variant: "destructive",
                    description: response.msg,
                })
            }else{
                toast({
                    variant: "destructive",
                    description: 'Unknown Error',
                })
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(LoginSlice.actions.updateIsLoading(false))
            setDialogOpen(false)
        }
    }
}