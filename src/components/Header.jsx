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
                    <div className="hidden md:flex space-x-8">
                        {['Trang chủ', 'Dịch vụ', 'Thành tựu', 'Dự án', 'Liên hệ'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}
                                className={` ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-[#a03039] transition-colors font-medium`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
                        {['Trang chủ', 'Dịch vụ', 'Thành tựu', 'Dự án', 'Liên hệ'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}
                                className="block px-4 py-2 text-gray-700 hover:text-[#a03039] hover:bg-gray-50 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
