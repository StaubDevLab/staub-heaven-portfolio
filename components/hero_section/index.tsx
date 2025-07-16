"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "animejs";
const HeroSection = () => {
    const handRef = useRef(null);

    useEffect(() => {
        anime({
            targets: handRef.current,
            rotate: [
                { value: -15, duration: 200 },
                { value: 15, duration: 200 },
                { value: -15, duration: 200 },
                { value: 0, duration: 200 }
            ],
            loop: true,
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);

    const handleClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>, href : string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-serif font-medium tracking-tighter text-muted sm:text-4xl md:text-5xl lg:text-6xl">
                            Hello, je suis Guillaume <span ref={handRef} className="inline-block ">👋🏻</span> 🧑🏻‍🍳
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted md:text-xl">
                            Portfolio culinaire - Recherche une entreprise pour reprendre la cuisine 🔥. 
                        </p>
                    </div>
                    <div className="w-full max-w-sm h-full space-y-2">
                        <Button className="bg-primary hover:bg-primary/90 text-white"
                                onClick={(e) => handleClick(e, "#creations")}>Découvrir mes créations</Button>
                    </div>
                </div>
            </div>
            <div className="container px-4 md:px-6 mt-12 text-center">
                <div className="relative w-full max-w-md mx-auto h-[70vh] overflow-hidden rounded-lg">
                    <Image
                        src="/hero-section.jpg"
                        alt="Dessin de moi dans une pâtisserie style Ghibli"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
