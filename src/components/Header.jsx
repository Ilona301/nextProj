"use client";

import React from 'react';
import {useTheme} from "@/Providers/ThemeContext";

const Header = () => {
    const {darkMode,toggleTheme} = useTheme();
    return (
        <div className="border-2 border-gray-400 min-h-[10vh] dark:border-amber-400">
            Header
            <button
                className="border border-black  p-1 rounded-lg"
                onClick={toggleTheme}>
                {darkMode === 'dark' ? (
                    <i className="bi bi-moon-stars-fill text-[20px] text-[#6F1A07]" />
                ) : (
                    <i className="bi bi-brightness-high-fill text-[20px] text-[#6F1A07]" />
                )}
            </button>

        </div>
    );
};

export default Header;