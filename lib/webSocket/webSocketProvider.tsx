"use client"
import React, {createContext, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isLocalhost, socketLocal} from "@/app/lib/types/constants";
import {RootState} from "@/app/lib/appRedux/store";
import {updateFriendRequestCount, updateUserRequestNotification} from "@/app/lib/appRedux/slice/systemSlice";
import { playSystemBeep } from '@/app/sounds';
import {UserRequest, UserRequestList } from '@/app/lib/types/userRequest';
import {addPost, destroyNewPost} from "@/app/lib/appRedux/slice/post";

interface WebSocketContextProps {
    notifications: UserRequest[];
    sendMessage: (message: any) => void;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {userData, isLogin} = useSelector((state: RootState) => state.auth);
    const {friendRequestList} = useSelector((state: RootState) => state.system);
    const [notifications, setNotifications] = useState<UserRequest[]>(friendRequestList);
    const [ws, setWs] = useState<WebSocket | null>(null);
    const dispatch = useDispatch()
    useEffect(() => {
        if ("Notification" in window) {
            Notification.requestPermission();
        }
        if (isLogin && userData.id) {
            const webSocket = isLocalhost
                ? new WebSocket('ws://' + socketLocal + '/ws/' + userData.id)
                : new WebSocket('wss://' + socketLocal + '/ws/' + userData.id);

            webSocket.onopen = () => {
                console.log('WebSocket connected');
            };

            webSocket.onmessage = (event) => {
                handleReceiveMessage(event.data);
            };

            webSocket.onclose = () => {
                console.log('WebSocket disconnected');
            };

            webSocket.onerror = (error) => {
                console.error('WebSocket error:', error);
            };

            // Set the WebSocket in state
            setWs(webSocket);

            // Cleanup function to close the WebSocket when the component unmounts or when user logs out
            return () => {
                if (webSocket.readyState === WebSocket.OPEN || webSocket.readyState === WebSocket.CONNECTING) {
                    webSocket.close();
                    console.log('WebSocket connection closed');
                }
            };
        }

        // Cleanup function when `isLogin` becomes false (logout)
        return () => {
            if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
                ws.close();
                console.log('WebSocket connection closed due to logout');
                setWs(null); // Clear the WebSocket state
            }
        };
    }, [isLogin, userData.id]);


    const handleReceiveMessage = (message: string) => {
        try {
            const parsedMessage = JSON.parse(message);
            const content = JSON.parse(parsedMessage.data)
            if(content.receiver_id === userData.id){
                if(content.operation === 'friendRequest'){
                    dispatch(updateFriendRequestCount(1))
                    const data:UserRequest = content.message
                    dispatch(updateUserRequestNotification(data))
                    if (Notification.permission === "granted") {
                        playSystemBeep()
                    }
                }
            }
            if(content.operation === 'createPost'){
                dispatch(addPost(content.message.msg));
                dispatch(destroyNewPost());
            }
        } catch (error) {
            console.error('Failed to parse message:', error);
        }
    };

    const sendMessage = (message: any) => {
        if (ws) {
            ws.send(JSON.stringify(message));
        }
    };

    return (
        <WebSocketContext.Provider value={{notifications, sendMessage}}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
};
