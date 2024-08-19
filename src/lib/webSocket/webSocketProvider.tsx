"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import {isLocalhost, socketLocal} from "@/apiHandling/consts";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

interface WebSocketContextProps {
    notifications: string[];
    sendMessage: (message: any) => void;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {userData, isLogin} = useSelector((state: RootState) => state.login);
    const [notifications, setNotifications] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        if(isLogin){
            const webSocket = isLocalhost? new WebSocket('ws://'+socketLocal+'/ws/'+userData.id): new WebSocket('wss://'+socketLocal+'/ws/'+userData.id)

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

            setWs(webSocket);

            return () => {
                webSocket.close();
            };
        }
    }, [isLogin, userData.id]);

    const handleReceiveMessage = (message: string) => {
        try {
            //const parsedMessage = JSON.parse(message);
            console.log(message)
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
        <WebSocketContext.Provider value={{ notifications, sendMessage }}>
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
