import { Phone, Mail } from "lucide-react";
import contactData from "../data/contactData";
import companyData from "../data/companyData";
import { MapPin } from "lucide-react";
import servicesData from "../data/servicesData";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-[#a03039] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img
                                src="./logo.png"
                                alt="Logo"
                                className="w-12 h-12 object-contain mr-4"
                            />
                            <h3 className="text-3xl font-black text-white">{companyData.name}</h3>
                        </div>
                        <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                            {companyData.mission}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center group">
                                <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-all duration-300">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contactData.phone}</span>
                            </div>
                            <div className="flex items-center group">
                                <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-all duration-300">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contactData.email}</span>
                            </div>
                            <div className="flex items-center group">
                                <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-all duration-300">
                                    <MapPin size={18} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contactData.address}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-xl mb-6 text-white">Our Services</h4>
                        <ul className="space-y-3">
                            {servicesData.map((service, index) => (
                                <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group">
                                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-xl mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item, index) => (
                                <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group">
                                    <span className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-8">
                            <h5 className="font-bold text-white mb-4">Follow Us</h5>
                            <div className="flex space-x-4">
                                <div className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                                </div>
                                <div className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                                </div>
                                <div className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 mb-4 md:mb-0">&copy; 2025 {companyData.name}. All rights reserved.</p>
                        <div className="flex space-x-6 text-sm text-gray-300">
                            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer