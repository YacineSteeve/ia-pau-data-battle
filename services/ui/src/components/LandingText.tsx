'use client';

import { type FunctionComponent, useEffect, useState } from 'react';

const TEXT = 'Welcome to Patent Maestro!';
const DELAY_MS = 75;

export const LandingText: FunctionComponent = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        if (currentIndex < TEXT.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + TEXT[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, DELAY_MS);
            
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);
    
    return (
        <h1 className="text-5xl font-bold">
            {currentText}
        </h1>
    );
}
