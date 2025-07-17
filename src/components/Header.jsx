"use client";

import React from 'react';
import {useTheme} from "@/Providers/ThemeContext";
import Link from "next/link";

const Header = () => {
    const {darkMode,toggleTheme} = useTheme();
    return (
        <div className="border-2 border-gray-400 min-h-[10vh] dark:border-amber-400">
            <Link href={`/`}>
                Home
            </Link>

            <Link href={`/adduser`}>
            Add user
        </Link>
            <button
                className="border border-black  p-1 rounded-lg"
                onClick={toggleTheme}>
                {darkMode === 'dark' ? (
                   <span>
                       Light
                   </span>
                ) : (
                    <span>
                        Dark
                    </span>
                )}
            </button>

        </div>
    );
};

export default Header;