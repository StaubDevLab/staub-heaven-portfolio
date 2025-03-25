"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";

const ParcoursSection = () => {
    const sectionsRef = useRef<HTMLDivElement[]>([]);
    const hasAnimated = useRef<boolean>(false); // Empêche la répétition

    useEffect(() => {
        if (!sectionsRef.current || hasAnimated.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let hasStarted = false;
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        hasStarted = true;
                        hasAnimated.current = true;

                        anime({
                            targets: sectionsRef.current,
                            opacity: [0, 1],
                            translateY: [50, 0], // Glissement vers le haut
                            duration: 800,
                            easing: "easeOutExpo",
                            delay: anime.stagger(200), // Animation en cascade
                        });

                        observer.disconnect(); // Stop l'observation après animation
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const parcours = [
        {
            year: "2024",
            title: "Concepteur Développeur BAC+4",
            school: "O'Clock",
            description:
                "Formation intensive en développement informatique, validée par un projet professionnel concret en lien avec la cuisine. Acquisition de compétences en gestion de projet et solution de problèmes techniques.",
        },
        {
            year: "2012 - 2014",
            title: "BTS Assistant manager - Major de promotion",
            school: "ICFA Bordeaux (33)",
            description:
                "Apprentissage de gestion administrative, de communication et de coordination. Alternance au sein d'Enedis renforçant mes compétences organisationnelles et relationnelles.",
        },
        {
            year: "2009 - 2011",
            title: "Bac Pro Commerce - Mention très bien",
            school: "Bordeaux (33)",
            description:
                "Formation complète en techniques de vente, gestion commerciale et relation client. Validation de ma capacité à exceller académiquement et professionnellement dans un domaine exigeant.",
        },
        {
            year: "2008 - 2009",
            title: "BEP Cuisine",
            school: "IFA Adolphe Chauvin - Osny (95)",
            description:
                "Acquisition des fondamentaux de la cuisine et de la pâtisserie dans un cadre professionnel. Apprentissage dans un restaurant étoilé validant mes compétences pratiques et mon savoir-être. Passage du BEP en une seule année au lieu de deux.",
        },
    ];

    return (
        <section id="parcours" className="w-full py-12 md:py-24 lg:py-32 bg-white text-justify">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#333333] sm:text-4xl">
                        Mon parcours de formation
                    </h2>
                    <p className="mx-auto max-w-[700px] text-black md:text-xl">
                        Un parcours diversifié qui témoigne de ma capacité d&apos;adaptation et d&apos;apprentissage.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl py-12">
                    <div className="space-y-8">
                        {parcours.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) sectionsRef.current[index] = el;
                                }}
                                className="opacity-0 transform translate-y-10 flex flex-col md:flex-row gap-4 items-start bg-background p-6 rounded-lg shadow-sm"
                            >
                                <div className="md:w-1/4">
                                    <div className="text-primary font-medium">{item.year}</div>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-serif font-medium text-black">{item.title}</h3>
                                    <p className="text-muted mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParcoursSection;
