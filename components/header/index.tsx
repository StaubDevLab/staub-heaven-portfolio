"use client";
import React, {useState} from 'react';

import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-[#faf7f2]/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-serif font-medium text-[#3c3630]">Guillaume STAUB</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link href="#about"
                          className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]">
                        À propos
                    </Link>
                    <Link
                        href="#creations"
                        className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]"
                    >
                        Mes Créations
                    </Link>
                    <Link href="#skills"
                          className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]">
                        Compétences
                    </Link>
                    <Link href="#contact"
                          className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]">
                        Contact
                    </Link>
                </nav>
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-[#faf7f2] border-b shadow-md p-4 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="#about"
                                className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </Link>
                            <Link
                                href="#creations"
                                className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Mes Créations
                            </Link>
                            <Link
                                href="#skills"
                                className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Compétences
                            </Link>
                            <Link
                                href="#contact"
                                className="text-sm font-medium text-[#3c3630] transition-colors hover:text-[#be9b7b]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#3c3630] hover:text-[#be9b7b] hover:bg-transparent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
