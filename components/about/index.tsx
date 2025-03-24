import React from 'react';
import {Button} from "@/components/ui/button";
import {FileText, GraduationCap} from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white text-justify">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2 text-justify">
                            <div
                                className="inline-block rounded-lg bg-[#be9b7b] px-3 py-1 text-sm text-white mb-2">
                                Qui suis-je ?
                            </div>
                            <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl">
                                Ma passion pour la cuisine
                            </h2>
                            <p className="max-w-[600px] text-[#6c6560] md:text-xl">
                                Fort d&apos;un parcours riche et atypique, et d&apos;un BEP cuisine décroché en une seule année à 16 ans, je souhaite m&apos;investir pleinement dans une formation en
                                apprentissage en pâtisserie pour concrétiser une passion qui m&apos;anime depuis l&apos;adolescence.
                            </p>
                            <p className="max-w-[600px] text-[#6c6560]">
                                À 33 ans, après avoir traversé des tempêtes et gravi des échelons loin de mes rêves,
                                je me réinvente à travers un CAP Pâtissier en alternance,
                                porté par une passion intacte et une détermination farouche.<br/>
                                Mon ambition ? Mettre à profit mes compétences variées – rigueur, créativité, gestion d’équipe,
                                adaptabilité -, ainsi que ma résilience forgées au fil de 15 ans d’expériences professionnelles diversifiées,
                                pour réanimer le cœur d’un petit village avec mon père.<br/>
                                Ensemble, nous rêvons d’une affaire familiale inspirée des diners américains ruraux :
                                un refuge convivial où les pâtisseries sous cloche côtoient les plats gourmands,
                                où le café coule à volonté et les pancakes racontent une histoire.<br/> Plus qu’un métier,
                                c’est une renaissance – une quête de sens et d&apos;un retour aux sources pour créer des desserts qui portent mon vécu,
                                contribuer à un savoir-faire artisanal d’exception et partager une douceur tangible avec le monde.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button className="bg-[#3c3630] hover:bg-[#3c3630]/90 text-white">
                                <FileText className="mr-2 h-4 w-4"/> Mon CV
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#be9b7b] text-[#be9b7b] hover:bg-[#be9b7b] hover:text-white"
                            >
                                <GraduationCap className="mr-2 h-4 w-4"/> Mon parcours
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[600px] overflow-hidden rounded-lg">
                        <Image
                            src="/placeholder.svg?height=800&width=800"
                            alt="Photo de moi en train de pâtisser"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
