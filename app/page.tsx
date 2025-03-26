import Header from "@/components/header";
import HeroSection from "@/components/hero_section";
import AboutSection from "@/components/about";
import CreationsSection from "@/components/creation-section";
import SkillsSection from "@/components/skills-section";
import ParcoursSection from "@/components/parcours-section";
import ExperiencesSection from "@/components/experiences-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {


    return (
        <div className="flex min-h-screen flex-col">

            <Header/>

            <main className="flex-1">

                <HeroSection/>


                <AboutSection/>

                <CreationsSection/>


                <SkillsSection/>

                <ParcoursSection/>

                <ExperiencesSection/>

                <ContactSection/>
            </main>


            <Footer/>
        </div>
    )
}

