'use client'
import {Button} from "antd";
import React from "react";
import {useSelector} from "react-redux";
import {useToast} from "@/components/ui/use-toast";
import {AxiosPost} from "@/service/axiosPost";
import {RootState} from "@/app/lib/appRedux/store";
import { useWebSocket } from "@/lib/webSocket/webSocketProvider";
import {User} from "@/app/lib/types/loginUserType";
export const ActionOnPerson: React.FC<{user: User}> = ({user}) =>{
   const {sendMessage } = useWebSocket();
    const data = new FormData()
    const { toast } = useToast()
    const {userData} = useSelector((state: RootState) => state.auth);
    const onClick = async () =>{
       data.append('friend_id',`${user.id}`)
        const response = await AxiosPost(userData.token,'send_friend_request/', data);
        if (response.code === 201) {
            const friendRequest = {
                receiver_id: user.id,
                operation:'friendRequest',
                message: {
                    'content':'friendRequest',
                    'request_id': response.request_id,
                    'msg':`${userData.name} ${userData.surname} made you a friend request`
                }
            }
            sendMessage(friendRequest);
            toast({
                description: `${response.msg} to ${user.name} ${user.surname}`,
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