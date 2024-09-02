'use client'
import React, { useEffect } from "react";
import {Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut} from "@/components/ui/command"
import { useWebSocket } from "@/lib/webSocket/webSocketProvider";

export const UserRequest: React.FC = () => {
    const {notifications} = useWebSocket();
    const onClick = async () => {

    }

    useEffect(() => {
        console.log(notifications)
    },[])
    return <Command>
        <CommandInput placeholder="search here..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Friend Requests">
                {notifications.map((notif,key)=>(
                    <CommandItem key={key}><p onClick={()=>alert('the')}>{notif.msg}</p></CommandItem>
                ))}
            </CommandGroup>
        </CommandList>
    </Command>
}