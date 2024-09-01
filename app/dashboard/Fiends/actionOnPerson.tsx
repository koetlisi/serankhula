'use client'
import {Button} from "antd";
import React from "react";
import {useSelector} from "react-redux";
import {useToast} from "@/components/ui/use-toast";
import {AxiosPost} from "@/service/axiosPost";
import {RootState} from "@/app/lib/appRedux/store";

export const ActionOnPerson: React.FC<{user_id: number}> = ({user_id}) =>{
   // const { notifications, sendMessage } = useWebSocket();
    const data = new FormData()
    const { toast } = useToast()
    const {userData} = useSelector((state: RootState) => state.auth);
    const onClick = async () =>{
       data.append('friend_id',`${user_id}`)
        const response = await AxiosPost(userData.token,'send_friend_request/', data);
        if (response.code === 201) {
            toast({
                description: response.msg,
            })
        }else{
            alert(response.msg)
        }
    }
    return (
        <div>
            <Button type="primary" onClick={onClick} style={{ marginRight: '8px' }}>
                Add
            </Button>
            <Button type="default">Block</Button>
        </div>
    );
}