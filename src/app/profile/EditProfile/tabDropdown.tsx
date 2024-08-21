import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';

interface TabItem {
    label: string;
    key: string;
    content: React.ReactNode;
}

export const TabDropdown: React.FC<{ tabs: TabItem[] }> = ({ tabs }) => {
    const profileSteps = useSelector((state: RootState) => state.pages.profileSteps ?? []);

    const hasJobless = profileSteps.includes('Jobless');
    const hasWorking = profileSteps.includes('Working');
    const hadWork = profileSteps.includes('Ex-employed');
    const studying = profileSteps.includes('Postgraduate');

    const [activeTab, setActiveTab] = useState(tabs[0]?.key || '');

    const handleTabClick = (key: string) => {
        setActiveTab(key);
    };

    // Dynamically modify tabs based on conditions
    const modifiedTabs = tabs.map(tab => {
        if (tab.key === '4') {
            // Modify tab with key '4' based on profileSteps
            let newLabel = 'Default Tab';
            let newContent = <></>;

            if (hasJobless) {
                newLabel = 'Jobless';
                newContent = <div>Content related to Jobless</div>;
            } else if (hasWorking) {
                newLabel = 'Working';
                newContent = <div>Content related to Working</div>;
            }

            return {
                ...tab,
                label: newLabel,
                content: newContent,
            };
        }
        return tab;
    }).filter(tab => tab.key !== '4' || (hasJobless || hasWorking)) // Filter out key '4' if no condition is met

    if (hadWork && !hasJobless && !hasWorking) {
        modifiedTabs.push({
            label: 'Ex-employed',
            key: '8',
            content: <div>Content related to Ex-employed</div>,
        });
    }

    if (studying) {
        modifiedTabs.push({
            label: 'Postgraduate',
            key: '9',
            content: <div>Content related to Postgraduate</div>,
        });
    }

    return (
        <div className="tabContainer">
            <div className="tabHeader flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {modifiedTabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`tabButton me-2 ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabContent">
                {modifiedTabs.map((tab) =>
                    activeTab === tab.key ? (
                        <div key={tab.key} className="content">
                            {tab.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};
