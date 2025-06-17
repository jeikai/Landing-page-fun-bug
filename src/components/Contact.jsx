import { Phone, Mail } from "lucide-react";
import contactData from "../data/contactData";
import { MapPin } from "lucide-react";
const Contact = () => {
    return (
        <section id="liên hệ" className="py-20 bg-gradient-to-br from-gray-900 to-[#a03039]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Liên hệ với chúng tôi
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Sẵn sàng biến ý tưởng của bạn thành hiện thực? Hãy liên hệ ngay!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center group">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                                <Phone className="text-white" size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Điện thoại</h3>
                            <p className="text-gray-200">{contactData.phone}</p>
                        </div>
                    </div>

                    <div className="text-center group">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                                <Mail className="text-white" size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                            <p className="text-gray-200">{contactData.email}</p>
                        </div>
                    </div>

                    <div className="text-center group">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Địa chỉ</h3>
                            <p className="text-gray-200">{contactData.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact