"use client";
import {useEffect, useRef, useState} from "react";
import anime from "animejs";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {Creation} from "@/types/creation";
import {getCreations} from "@/actions/creations-actions";
import {Skeleton} from "@/components/ui/skeleton";

export default function CreationsSection() {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const hasAnimated = useRef<boolean>(false);
    const [creations, setCreations] = useState<Creation[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchCreations = async () => {
        try {
            const data = await getCreations();
            setCreations(data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setLoading(true)
        fetchCreations()


    }, []);
    useEffect(() => {
        if (!cardsRef.current || hasAnimated.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let hasStarted = false;
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        hasStarted = true;
                        hasAnimated.current = true;
                        anime({
                            targets: cardsRef.current,
                            opacity: [0, 1],
                            translateY: [50, 0], // Slide vers le haut
                            duration: 800,
                            easing: "easeOutExpo",
                            delay: anime.stagger(200), // Animation en cascade
                        });
                        observer.disconnect(); // Stoppe l'observation après l'animation
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect(); // Cleanup à la suppression du composant
    }, [creations]);

    if (creations.length === 0) {
        return <p className="text-center text-muted-foreground">Aucune création trouvée.</p>;
    }
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} className="h-64 w-full"/>
                    ))}
            </div>
        );
    }


    return (
        <section id="creations" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl">
                        Mes créations
                    </h2>
                    <p className="mx-auto max-w-[700px] text-[#6c6560] md:text-xl">
                        Découvrez une sélection de mes réalisations.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {creations.map((item, index) => (
                        <Card
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="opacity-0 transform translate-y-10 overflow-hidden border-none shadow-md p-0"
                        >
                            <div className="relative h-96"> {/* Format portrait */}
                                <Image
                                    src={item.coverImage || "/placeholder.svg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-3 bg-background text-center">
                                <h3 className="text-lg font-medium text-primary">{item.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
