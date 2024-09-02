'use client'
import React from "react";
import {Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut} from "@/components/ui/command"
import { useWebSocket } from "@/lib/webSocket/webSocketProvider";

export const UserRequest: React.FC<{notification:any}> = ({notification}) => {
    const onClick = async () => {

    }
    console.log(JSON.stringify(notification))
    return <Command>
        <CommandInput placeholder="search here..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
            </CommandGroup>
        </CommandList>
    </Command>
}