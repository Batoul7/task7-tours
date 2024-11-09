'use client';
import React, { useEffect, useState } from 'react';

interface CounterProps {
    value: number;
    label: string;
    duration?: number; 
}

const Counter = ({ value, label, duration = 2000 }: CounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const incrementTime = duration / value;
        let currentCount = 0;
        const counterInterval = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);

            if (currentCount >= value) {
                clearInterval(counterInterval);
            }
        }, incrementTime);

        return () => clearInterval(counterInterval);
    }, [value, duration]);

    return (
        <div className='w-[83px]'>
            <h3 className="text-32 font-bold text-myprimary">{count}+</h3>
            <p className="text-16 text-mygray text-opacity-60">{label}</p>
        </div>
    );
};

export default Counter;
