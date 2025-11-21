import { useState, useEffect } from "react";
import companyData from "../data/companyData";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo + Company Name */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="./logo.png"
                            alt="Logo"
                            className="w-15 h-15 object-contain"
                        />
                        <div className="text-2xl font-bold text-[#a03039] whitespace-nowrap">
                            {companyData.name}
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'Services', href: '#services' },
                            { name: 'Achievements', href: '#achievements' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Contact', href: '#contact' }
                        ].map((item) => (
                            <a key={item.name} href={item.href}
                                className={`relative ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-[#a03039] transition-all duration-300 font-semibold group`}>
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a03039] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="bg-[#a03039] hover:bg-[#8a2831] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100">
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'Services', href: '#services' },
                            { name: 'Achievements', href: '#achievements' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Contact', href: '#contact' }
                        ].map((item) => (
                            <a key={item.name} href={item.href}
                                className="block px-6 py-3 text-gray-700 hover:text-[#a03039] hover:bg-[#a03039]/5 transition-all duration-300 font-semibold border-l-4 border-transparent hover:border-[#a03039]">
                                {item.name}
                            </a>
                        ))}
                        <div className="px-6 pt-4">
                            <button className="w-full bg-[#a03039] hover:bg-[#8a2831] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
                                Get Quote
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
