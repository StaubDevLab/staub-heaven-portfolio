"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";

const ExperiencesSection = () => {
    const sectionsRef = useRef<HTMLDivElement[]>([]);
    const hasAnimated = useRef<boolean>(false);

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
                            delay: anime.stagger(200), // Effet cascade
                        });

                        observer.disconnect(); // Arrêt de l'observation après animation
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

    const experiences = [
        {
            year: "2019 - aujourd'hui",
            title: "Développeur d'applications",
            company: "Enedis",
            description:
                "Gestion de projets techniques complexes, coordination d'équipes et optimisation des processus. Développement de solutions innovantes sous pression, démontrant rigueur et adaptabilité. Formation de collaborateurs, mettant en avant mes compétences pédagogiques et ma capacité à transmettre. Victoire d'un titre interne remis par la présidente de l'entreprise.",
        },
        {
            year: "2015 - 2019",
            title: "Responsable technique",
            company: "Enedis",
            description:
                "Appui métier et managérial au sein d'un plateau téléphonique 24/24. Formation des agents et référents France des outils informatiques utilisés par le Centre d'Appels Dépannage. Responsabilité du plateau et prise de décisions en situation de crise.",
        },
        {
            year: "2012 - 2014",
            title: "Assistant de direction",
            company: "Enedis",
            description:
                "Coordination des plannings et gestion des urgences dans un environnement opérationnel 24/24. Supervision d'une équipe d'opérateurs, assurant fluidité des interventions et satisfaction client. Rédaction de rapports et suivi administratif souvent remarqués par la direction.",
        },
        {
            year: "2009 - 2011",
            title: "Employé polyvalent en boulangerie",
            company: "Epi Gaulois Bordeaux",
            description:
                "Participation à la production de pains, viennoiseries, snacking. Proposition culinaire pour conquérir de nouveaux clients. Service client, gestion des stocks, gestion des plannings et de la logistique. Apprentissage des bases de la pâtisserie.",
        },
        {
            year: "2008 - 2009",
            title: "Cuisinier",
            company: "Le Chiquito - Méry-sur-Oise",
            description:
                "Élaboration et préparation des entrées et aide au pâtissier dans un environnement exigeant, sous la supervision de chefs reconnus. Respect des standards de qualité et des délais stricts, développant précision et discipline. Collaboration avec une brigade pour des services haut de gamme.",
        },
    ];

    return (
        <section id="experiences" className="w-full py-12 md:py-24 lg:py-32 bg-background text-justify">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-serif font-medium tracking-tighter text-black sm:text-4xl">
                        Mes expériences professionnelles
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted md:text-xl">
                        15 années d&apos;expériences variées qui ont forgé mon professionnalisme.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl py-12">
                    <div className="space-y-8">
                        {experiences.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) sectionsRef.current[index] = el;
                                }}
                                className="opacity-0 transform translate-y-10 flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-sm"
                            >
                                <div className="md:w-1/4">
                                    <div className="text-primary font-medium">{item.year}</div>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-serif font-medium text-black">{item.title}</h3>
                                    <p className="text-sm text-primary mb-2">{item.company}</p>
                                    <p className="text-muted">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperiencesSection;
