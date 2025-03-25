"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { Button } from "@/components/ui/button";
import { Award, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const hasAnimated = useRef<boolean>(false);

    useEffect(() => {
        if (!sectionRef.current || hasAnimated.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        hasAnimated.current = true;

                        anime.timeline()
                            .add({
                                targets: sectionRef.current,
                                opacity: [0, 1],
                                translateY: [50, 0], // Glissement vers le haut
                                duration: 800,
                                easing: "easeOutExpo",
                            })
                            .add({
                                targets: ".contact-item",
                                opacity: [0, 1],
                                translateX: [-30, 0], // Glissement latéral pour un effet dynamique
                                duration: 800,
                                delay: anime.stagger(200), // Effet cascade
                                easing: "easeOutExpo",
                            });

                        observer.disconnect(); // Arrêter l'observation après animation
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="opacity-0 transform translate-y-10 w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-serif font-medium tracking-tighter text-black sm:text-4xl">
                        Me contacter
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted md:text-xl">
                        Pour toute information complémentaire sur ma candidature.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">


                    <div className="bg-background p-8 rounded-lg shadow-sm h-full flex flex-col">
                        <div className="space-y-6 flex-1">
                            <div className="flex items-center space-x-3 contact-item">
                                <Phone className="h-5 w-5 text-primary"/>
                                <span className="text-black">07 87 05 62 92</span>
                            </div>
                            <div className="flex items-center space-x-3 contact-item">
                                <Mail className="h-5 w-5 text-primary"/>
                                <a href="mailto:guillaume@staub.pro"
                                   className="text-primary underline">guillaume@staub.pro</a>
                            </div>
                            <div className="flex items-start space-x-3 contact-item">
                                <MapPin className="h-5 w-5 text-primary"/>
                                <span className="text-black">Bordeaux</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-primary/20">
                            <h3 className="text-lg font-serif font-medium text-black mb-2">Centres d&apos;intérêt</h3>
                            <p className="text-muted text-justify">
                                Je passe un temps fou en cuisine, à jouer les chefs étoilés pour régaler ma petite tribu – un vrai Top Chef familial, tablier en option ! 🧑🏻‍🍳 <br/>

                                Mais attention, je suis aussi un serial goûteur : j’adore explorer les cuisines du monde et me faire chouchouter au resto avec des plats bien gourmands et généreux. Mon QG ? Sans hésiter, <a target={"_blank"} className={"text-primary underline"} href={"https://g.co/kgs/W4efC1W"}>Rosi Trattoria</a> à Brive-la-Gaillarde – leurs pizzas, c’est ma kryptonite 🍕. <br/>

                                Et sinon, je suis un dingue de running : j’ai dompté des semi-marathons et je continue de chausser mes baskets chaque semaine pour courir comme si j’avais un pizzaïolo aux trousses ! 🏃🏻
                            </p>
                        </div>
                    </div>


                    <div className="h-full flex flex-col justify-center">
                        <div className="bg-background p-8 rounded-lg shadow-sm flex-1 flex flex-col">
                            <Award className="h-12 w-12 mb-4 text-primary"/>
                            <h3 className="text-xl font-serif font-medium text-black mb-4">Pourquoi me choisir ?</h3>
                            <p className="text-muted mb-6 text-justify flex-1">
                                À 33 ans, je ne suis pas un apprenant ordinaire. Je suis un homme qui a traversé des tempêtes, qui a appris la rigueur dans les cuisines étoilées, la patience dans les responsabilités familiales, et la résilience dans les défis professionnels. Je ne viens pas les mains vides : je viens avec une maturité rare, une passion intacte et une détermination à transformer chaque instant de cette formation en une réussite.

                            </p>
                            <Button
                                className="bg-primary hover:bg-primary/80 text-white transition-transform transform hover:scale-105">
                                <Link target="_blank" href="https://docs.google.com/presentation/d/e/2PACX-1vQWU1LFA1RrDn5ks-sYIzi0eRGgdNnFxtTOv2uJWC0VHRG3w5aij-9A41AxL8KxAu2EFO7JqMbrVTu7/pub?start=false&loop=false&delayms=3000&slide=id.g2768f7b9644_0_10">
                                    Consulter la brochure entreprise
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
