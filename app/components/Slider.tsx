import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {StoryCard} from "@/app/dashboard/Feeds/Stories/StoryCard/StoryCard";

export const CarouselSize: React.FC<{ data: any[] }> = ({ data }) => {
    return (
        <Carousel
            opts={{
                align: "start"
            }}
            className="w-full max-w-lg mx-auto"
        >
            <CarouselContent>
                {data.map((user:any, index: number) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/4">
                        <StoryCard identifier={user.id} key={user.id} user={user} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-between mt-4">
                <CarouselPrevious className="p-0 rounded-full bg-gray-200 hover:bg-gray-300" />
                <CarouselNext className="p-0 rounded-full bg-gray-200 hover:bg-gray-300" />
            </div>
        </Carousel>
    );
};
