import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t bg-[#333333] py-6 md:py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-serif font-medium text-white">Guillaume Staub</span>
                    </div>
                    <p className="text-sm text-white/70">
                        © {new Date().getFullYear()} Portfolio professionnel - Candidature en alternance pâtisserie
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
