import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl md:text-5xl lg:text-6xl">
                            Staub Heaven
                        </h1>
                        <p className="mx-auto max-w-[700px] text-[#6c6560] md:text-xl">
                            Portfolio culinaire - Recherche une entreprise pour un CAP Pâtisserie à partir de septembre 2025.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <Button className="bg-[#be9b7b] hover:bg-[#a88967] text-white">Découvrir mes créations</Button>
                    </div>
                </div>
            </div>
            <div className="container px-4 md:px-6 mt-12">
                <div className="relative h-[50vh] overflow-hidden rounded-lg">
                    <Image
                        src="/placeholder.svg?height=800&width=1600"
                        alt="Mes pâtisseries"
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
