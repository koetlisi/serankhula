"use client"
import React, {createContext, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isLocalhost, socketLocal} from "@/app/lib/types/constants";
import {RootState} from "@/app/lib/appRedux/store";
import {updateFriendRequestCount} from "@/app/lib/appRedux/slice/systemSlice";

interface WebSocketContextProps {
    notifications: string[];
    sendMessage: (message: any) => void;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {userData, isLogin} = useSelector((state: RootState) => state.auth);
    const [notifications, setNotifications] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);
    const dispatch = useDispatch()
    useEffect(() => {
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
            const alertMessage = `Message from User ${parsedMessage.sender_id}: ${parsedMessage.content}`;
            // Add the received message to the notifications array
            setNotifications(prevNotifications => [...prevNotifications, alertMessage]);
            dispatch(updateFriendRequestCount(1))
            console.log(alertMessage)
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
