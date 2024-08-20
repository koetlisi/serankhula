import React, { useState } from 'react';

export const TabDropdown = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.key || '');

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    return (
        <div className="tabContainer">
            <div className="tabHeader flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`tabButton me-2  ${activeTab === tab.key?'active':''}`}
                        onClick={() => handleTabClick(tab.key)}
                    >
                        {tab.label}

                    </button>
                ))}
            </div>
            <div className="tabContent">
                {tabs.map((tab) =>
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

