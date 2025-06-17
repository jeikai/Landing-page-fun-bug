import { Phone, Mail } from "lucide-react";
import contactData from "../data/contactData";
import companyData from "../data/companyData";
import { MapPin } from "lucide-react";
import servicesData from "../data/servicesData";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold text-[#a03039] mb-4">{companyData.name}</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {companyData.mission}
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-3 text-[#a03039]" />
                                <span>{contactData.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-3 text-[#a03039]" />
                                <span>{contactData.email}</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-3 text-[#a03039]" />
                                <span>{contactData.address}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Dịch vụ</h4>
                        <ul className="space-y-2 text-gray-400">
                            {servicesData.map((service, index) => (
                                <li key={index} className="hover:text-[#a03039] transition-colors cursor-pointer">
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Liên kết</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-[#a03039] transition-colors cursor-pointer">Trang chủ</li>
                            <li className="hover:text-[#a03039] transition-colors cursor-pointer">Về chúng tôi</li>
                            <li className="hover:text-[#a03039] transition-colors cursor-pointer">Dự án</li>
                            <li className="hover:text-[#a03039] transition-colors cursor-pointer">Liên hệ</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 {companyData.name}. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer