"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { BicepsFlexed, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "animejs";

const AboutSection = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    anime.timeline()
                        .add({
                            targets: leftRef.current,
                            opacity: [0, 1],
                            translateX: [-100, 0],
                            duration: 1000,
                            easing: "easeOutExpo",
                        })
                        .add({
                            targets: rightRef.current,
                            opacity: [0, 1],
                            translateX: [100, 0],
                            duration: 1000,
                            easing: "easeOutExpo",
                        }, "-=800");

                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (leftRef.current) observer.observe(leftRef.current);
        return () => observer.disconnect();
    }, []);

    const downloadFile = (filePath: string, fileName: string) => {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="w-full py-12 px-3 md:py-24 lg:py-32 bg-white text-justify">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div ref={leftRef} className="space-y-2 opacity-0">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-2">
                                Qui suis-je ?
                            </div>
                            <h2 className="text-3xl font-serif font-medium tracking-tighter text-primary sm:text-4xl">
                                Ma passion pour la cuisine
                            </h2>
                            <p className="text-muted md:text-xl">
                                Fort d&apos;un parcours riche et atypique, et d&apos;un BEP cuisine décroché en une seule année à 16 ans, je souhaite m&apos;investir pleinement dans une formation en apprentissage en pâtisserie pour concrétiser une passion qui m&apos;anime depuis l&apos;adolescence.
                            </p>
                            <p className="text-black">
                                À 33 ans, après avoir traversé des tempêtes et gravi des échelons loin de mes rêves,
                                je me réinvente à travers un CAP Pâtissier en alternance,
                                porté par une passion intacte et une détermination farouche.<br/>
                                Mon ambition ? Mettre à profit mes compétences variées – rigueur, créativité, gestion d’équipe,
                                adaptabilité -, ainsi que ma résilience forgée au fil de 15 ans d’expériences professionnelles diversifiées,
                                pour réanimer le cœur d’un petit village avec mon père 👨🏻.<br/>
                                Ensemble, nous rêvons d’une affaire familiale, en redonnant vie au cœur d’un village ❤️🇫🇷
                                grâce à un espace chaleureux et propice aux échanges, s’inspirant des diners ruraux américains🇺🇸,
                                où les pâtisseries sous cloche s’entourent de plats savoureux et copieux,
                                dans une ambiance empreinte des arômes de café et de pancakes tout juste sortis de la poêle🥞.<br/>
                                Plus qu’un métier, c’est une renaissance – une quête de sens et un retour aux sources pour créer des desserts qui portent mon vécu,
                                contribuer à un savoir-faire artisanal d’exception et partager une douceur tangible avec le monde.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button
                                className="bg-primary hover:bg-primary/80 text-white"
                                onClick={() => downloadFile("/documents/CV_STAUB_Guillaume.pdf", "Mon_CV.pdf")}
                            >
                                <FileText className="mr-2 h-4 w-4"/> Mon CV
                            </Button>
                            <Button
                                variant="outline"
                                className="border-primary-foreground text-primary hover:bg-primary-foreground/80"
                                onClick={() => downloadFile("/documents/LM_STAUB_Guillaume.pdf", "Ma_Lettre_de_Motivation.pdf")}
                            >
                                <BicepsFlexed className="mr-2 h-4 w-4"/> Ma lettre de motivation
                            </Button>
                        </div>
                    </div>
                    <div className="relative md:h-[600px] overflow-hidden rounded-lg">
                        <Image
                            src="/creations/cook_with_my_daughter.jpg"
                            alt="Photo de moi en train de pâtisser"
                            fill
                            className="object-cover absolute top-0 left-0 w-full h-full"
                            ref={rightRef}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
