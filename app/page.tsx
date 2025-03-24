import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Award, Mail, MapPin, Phone} from "lucide-react"
import Header from "@/components/header";
import HeroSection from "@/components/hero_section";
import AboutSection from "@/components/about";

export default function Home() {


    return (
        <div className="flex min-h-screen flex-col bg-[#faf7f2]">

            <Header/>

            <main className="flex-1">

                <HeroSection/>


                <AboutSection/>

                {/* Creations Section */}
                <section id="creations" className="w-full py-12 md:py-24 lg:py-32 bg-[#faf7f2]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl">
                                    Mes créations
                                </h2>
                                <p className="mx-auto max-w-[700px] text-[#6c6560] md:text-xl">
                                    Découvrez une sélection de mes réalisations pâtissières.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {title: "Cheesecake New-York", image: "/placeholder.svg?height=400&width=400"},
                                {title: "Cookies aux 3 chocolats", image: "/placeholder.svg?height=400&width=400"},
                                {title: "Cupcakes vanille-framboise", image: "/placeholder.svg?height=400&width=400"},
                                {title: "Apple pie cannelle", image: "/placeholder.svg?height=400&width=400"},
                                {title: "Brownies caramel beurre salé", image: "/placeholder.svg?height=400&width=400"},
                                {title: "Donuts glacés", image: "/placeholder.svg?height=400&width=400"},
                            ].map((item, index) => (
                                <Card key={index} className="overflow-hidden border-none shadow-md">
                                    <div className="relative h-60">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <CardContent className="p-4 bg-white">
                                        <h3 className="text-lg font-serif font-medium text-[#3c3630]">{item.title}</h3>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl">
                                    Mes compétences
                                </h2>
                                <p className="mx-auto max-w-[700px] text-[#6c6560] md:text-xl">
                                    Savoir-faire et techniques que j&apos;ai développés.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Pâtes de base",
                                    description: "Pâte à choux, pâte sablée, pâte brisée, pâte feuilletée, génoise.",
                                },
                                {
                                    title: "Crèmes et ganaches",
                                    description: "Crème pâtissière, crème au beurre, ganache montée, crème diplomate.",
                                },
                                {
                                    title: "Techniques américaines",
                                    description: "Cheesecakes, muffins, cookies, cupcakes, layer cakes.",
                                },
                                {
                                    title: "Décoration",
                                    description: "Glaçage, travail du chocolat, décors en sucre, modelage.",
                                },
                                {
                                    title: "Organisation",
                                    description: "Planification, mise en place, respect des timings et des températures.",
                                },
                                {
                                    title: "Créativité",
                                    description: "Développement de recettes, associations de saveurs, présentation visuelle.",
                                },
                            ].map((item, index) => (
                                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-serif font-medium text-[#3c3630] mb-2">{item.title}</h3>
                                        <p className="text-[#6c6560]">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#faf7f2]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl">
                                    Mon parcours
                                </h2>
                                <p className="mx-auto max-w-[700px] text-[#6c6560] md:text-xl">
                                    Formation et expériences dans le domaine de la pâtisserie.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-4xl py-12">
                            <div className="space-y-8">
                                <div
                                    className="flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                                    <div className="md:w-1/4">
                                        <div className="text-[#be9b7b] font-medium">2023 - Présent</div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-serif font-medium text-[#3c3630]">
                                            Formation en ligne "Masterclass Pâtisserie"
                                        </h3>
                                        <p className="text-[#6c6560] mt-2">
                                            Cours intensifs sur les techniques de base et avancées en pâtisserie
                                            française et internationale.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                                    <div className="md:w-1/4">
                                        <div className="text-[#be9b7b] font-medium">2022 - 2023</div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-serif font-medium text-[#3c3630]">
                                            Stage d&apos;observation - Boulangerie "Au Pain Doré"
                                        </h3>
                                        <p className="text-[#6c6560] mt-2">
                                            Stage de 3 mois pour observer et assister l&apos;équipe de pâtisserie dans
                                            la préparation
                                            quotidienne.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                                    <div className="md:w-1/4">
                                        <div className="text-[#be9b7b] font-medium">2021 - 2022</div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-serif font-medium text-[#3c3630]">
                                            Ateliers de pâtisserie - École du Sucré
                                        </h3>
                                        <p className="text-[#6c6560] mt-2">
                                            Participation à 12 ateliers spécialisés sur différentes techniques de
                                            pâtisserie.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif font-medium tracking-tighter text-[#3c3630] sm:text-4xl">
                                    Me contacter
                                </h2>
                                <p className="mx-auto max-w-[700px] text-[#6c6560] md:text-xl">
                                    Pour toute information complémentaire sur ma candidature.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
                            <div className="space-y-6 bg-[#faf7f2] p-8 rounded-lg shadow-sm">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-[#be9b7b]"/>
                                    <span className="text-[#3c3630]">+33 6 12 34 56 78</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-[#be9b7b]"/>
                                    <span className="text-[#3c3630]">marie.dupont@email.com</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-[#be9b7b]"/>
                                    <span className="text-[#3c3630]">
                    123 Avenue des Pâtissiers
                    <br/>
                    75001 Paris, France
                  </span>
                                </div>
                                <div className="pt-4 border-t border-[#be9b7b]/20">
                                    <h3 className="text-lg font-serif font-medium text-[#3c3630] mb-2">Disponibilité</h3>
                                    <p className="text-[#6c6560]">Disponible pour un entretien à partir de septembre
                                        2024</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="bg-[#faf7f2] p-8 rounded-lg shadow-sm">
                                    <Award className="h-12 w-12 mb-4 text-[#be9b7b]"/>
                                    <h3 className="text-xl font-serif font-medium text-[#3c3630] mb-4">Pourquoi me
                                        choisir ?</h3>
                                    <p className="text-[#6c6560] mb-6">
                                        Passionnée, créative et rigoureuse, je souhaite intégrer votre école pour
                                        perfectionner mes
                                        techniques et développer mon savoir-faire en pâtisserie. Mon expérience
                                        autodidacte m&apos;a permis
                                        d&apos;acquérir de solides bases que je souhaite approfondir dans un cadre
                                        professionnel.
                                    </p>
                                    <Button className="bg-[#be9b7b] hover:bg-[#a88967] text-white">
                                        Télécharger mon dossier complet
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t bg-[#3c3630] py-6 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-serif font-medium text-white">Marie Dupont</span>
                        </div>
                        <p className="text-sm text-white/70">
                            © {new Date().getFullYear()} Portfolio de pâtisserie - Candidature École Internationale de
                            Pâtisserie
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

