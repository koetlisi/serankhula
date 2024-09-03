import {useState} from "react";
import {Post} from "@/app/lib/types/post";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";

export const PostingFunction = ()=>{
    const { userData } = useSelector((state: RootState) => state.auth);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState<Post>({id: '0', userId: userData.id, text: '', imageUrl: '', createdAt: '', updatedAt: '', comments: [], likes:[],})
    const onChange = (typing:any) =>{
        const {name, value} = typing.target;
        if(value.length >1 && !open){
            setOpen(true)
        }else if(value.length===0 && open){
            setInput((prevInput: Post) => ({
                ...prevInput,
                [name]: ''
            }));
            setOpen(false)
        }
        // Update the specific field in the input state
        setInput((prevInput: Post) => ({
            ...prevInput,
            [name]: value
        }));
    }

    return {onChange, input, open,setOpen,userData}
}