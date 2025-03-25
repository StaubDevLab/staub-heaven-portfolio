import React from 'react';
import {Card, CardContent} from '../ui/card';
import {Award, Briefcase, Clock, GraduationCap, Star} from "lucide-react";

const SkillsSection = () => {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-[#f8fafc]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#333333] sm:text-4xl">
                            Mes compétences
                        </h2>
                        <p className="mx-auto max-w-[700px] text-[#666666] md:text-xl">
                            Savoir-faire et qualités développés au cours de mon parcours professionnel.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Rigueur et discipline",
                            description: "15 ans d'expériences dans des milieux exigeants.",
                            icon: <Star className="h-8 w-8 mb-4 text-primary"/>,
                        },
                        {
                            title: "Adaptabilité",
                            description: "Capacité à exceller dans des environnements sous pression.",
                            icon: <Clock className="h-8 w-8 mb-4 text-primary"/>,
                        },
                        {
                            title: "Sens du service",
                            description: "Affiné au contact des clients et dans la gestion d'équipes pluridisciplinaires.",
                            icon: <Award className="h-8 w-8 mb-4 text-primary"/>,
                        },
                        {
                            title: "Techniques culinaires",
                            description: "Bases solides acquises en milieu professionnel.",
                            icon: <GraduationCap className="h-8 w-8 mb-4 text-primary"/>,
                        },
                        {
                            title: "Gestion de projets",
                            description: "Maîtrise des plannings et des priorités.",
                            icon: <Briefcase className="h-8 w-8 mb-4 text-primary"/>,
                        },
                        {
                            title: "Créativité",
                            description: "Développement de solutions innovantes et capacité à penser différemment.",
                            icon: <Star className="h-8 w-8 mb-4 text-primary"/>,
                        },
                    ].map((item, index) => (
                        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-lg font-serif font-medium text-black mb-2">{item.title}</h3>
                                <p className="text-muted">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
