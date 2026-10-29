"use client";

import React from "react";
import { useScroll } from "@/hooks/useScroll";
import { NavLinks } from "./NavLinks";
import { UserMenu } from "./UserMenu";

export default function Header() {
    const isScrolled = useScroll();

    return (
        <header className={`
            ${isScrolled && 'bg-black'}
            fixed top-0 z-50 flex w-full 
            items-center justify-between px-4 py-4
            transition-all lg:px-10 lg:py-6
        `}>
            <div className="flex items-center space-x-2 md:space-x-8">
                <img 
                    src="https://rb.gy/ulxxee" 
                    width={120} 
                    height={120} 
                    alt="Logo do Streaming" 
                />
                <NavLinks />
            </div>
            
            <UserMenu />
        </header>
    );
}