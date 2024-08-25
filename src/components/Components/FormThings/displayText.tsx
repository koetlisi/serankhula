import React, { useState } from 'react';

interface DescriptionProps {
    text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Convert newlines to <br> tags and return HTML-safe string
    const convertNewlinesToHtml = (text: string) => {
        return text.replace(/\n/g, '<br/>');
    };

    // Find the index of the first newline
    const findFirstNewlineIndex = (text: string) => {
        const index = text.indexOf('\n');
        return index === -1 ? text.length : index;
    };

    // Toggle the expansion state
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine the displayed text based on the expansion state
    const firstNewlineIndex = findFirstNewlineIndex(text);
    const truncatedText = text.slice(0, firstNewlineIndex);
    const displayText = isExpanded
        ? convertNewlinesToHtml(text)
        : convertNewlinesToHtml(truncatedText) + (text.length > firstNewlineIndex ? '...' : '');

    return (
        <div className="text-display">
            <p
                className="about-me-para"
                dangerouslySetInnerHTML={{__html: displayText }}
            />
            {text.length > firstNewlineIndex && (
                <button className="see-more-btn pr-0" onClick={toggleExpansion}>
                    {isExpanded ? "See Less" : "See More"}
                </button>
            )}
        </div>
    );
};

export default Description;
