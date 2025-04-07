"use client";
import React, {useState} from 'react';
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import HeaderAvatar from "@/components/header-avatar";
import {usePathname} from "next/navigation";
import { redirect } from 'next/navigation'
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const handleClick = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>, href : string) => {
        e.preventDefault();
        if (pathname === "/") {
            const targetId = href.replace("#", "");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            redirect(`/${href}`)
        }

    };

    return (
        <header className="sticky top-0 z-40 w-full  bg-background/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl  font-medium text-primary ">Guillaume STAUB</span>
                </div>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href={pathname === "/" ? "#about" : "/#about"} onClick={(e) => handleClick(e, "#about")}
                          className="text-sm font-medium  transition-colors text-muted hover:text-primary">
                        À propos
                    </Link>
                    <Link
                        href={pathname === "/" ? "#creations" : "/#creations"} onClick={(e) => handleClick(e, "#creations")}
                        className="text-sm font-medium  transition-colors text-muted hover:text-primary"
                    >
                        Mes Créations
                    </Link>
                    <Link href={pathname === "/" ? "#skills" : "/#skills"} onClick={(e) => handleClick(e, "#skills")}
                          className="text-sm font-medium  transition-colors text-muted hover:text-primary">
                        Compétences
                    </Link>
                    <Link href={pathname === "/" ? "#experiences" : "/#experiences"} onClick={(e) => handleClick(e, "#experiences")}
                          className="text-sm font-medium  transition-colors text-muted hover:text-primary">
                        Mes expériences
                    </Link>
                    <Link href={pathname === "/" ? "#contact" : "/#contact"} onClick={(e) => handleClick(e, "#contact")}
                          className="text-sm font-medium transition-colors text-muted hover:text-primary">
                        Contact
                    </Link>
                    <HeaderAvatar/>
                </nav>

                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-md p-4 md:hidden">
                        <nav className="flex flex-col space-y-4">

                            <Link
                                href={pathname === "/" ? "#about" : "/#about"}
                                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                onClick={(e) => {
                                    handleClick(e, "#about")
                                    setIsMenuOpen(false)
                                }}
                            >
                                À propos
                            </Link>
                            <Link
                                href={pathname === "/" ? "#creations" : "/#creations"}
                                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                onClick={(e) => {
                                    handleClick(e, "#creations")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Mes Créations
                            </Link>
                            <Link
                                href={pathname === "/" ? "#skills" : "/#skills"}
                                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                onClick={(e) => {
                                    handleClick(e, "#skills")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Compétences
                            </Link>
                            <Link
                                href={pathname === "/" ? "#experiences" : "/#experiences"}
                                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                onClick={(e) => {
                                    handleClick(e, "#experiences")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Mes expériences
                            </Link>
                            <Link
                                href={pathname === "/" ? "#contact" : "/#contact"}
                                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                onClick={(e) => {
                                    handleClick(e, "#contact")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Contact
                            </Link>

                        </nav>
                    </div>
                )}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-primary hover:text-primary/80 hover:bg-transparent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                    </Button>
                    <HeaderAvatar/>
                </div>

            </div>
        </header>
    );
};

export default Header;
