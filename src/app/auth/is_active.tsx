import React, { useState, useEffect, useRef } from 'react';

const InactivityTracker: React.FC = () => {
    const [isInactive, setIsInactive] = useState(false);
    const [inactiveTime, setInactiveTime] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleActivity = () => {
            setIsInactive(false);
            setInactiveTime(0);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setIsInactive(true);
            }, 5000); // 5 seconds for demonstration; adjust as needed
        };

        // Add event listeners
        document.addEventListener('mousemove', handleActivity);
        document.addEventListener('keydown', handleActivity);
        document.addEventListener('click', handleActivity);

        // Clean up event listeners on unmount
        return () => {
            document.removeEventListener('mousemove', handleActivity);
            document.removeEventListener('keydown', handleActivity);
            document.removeEventListener('click', handleActivity);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInactive) {
            const interval = setInterval(() => {
                setInactiveTime((prevTime) => prevTime + 1);
            }, 1000); // Increment inactive time every second

            return () => clearInterval(interval);
        }
    }, [isInactive]);

    return <></>
};

export default InactivityTracker;
