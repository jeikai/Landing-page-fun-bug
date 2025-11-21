import servicesData from "../data/servicesData";

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a03039' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-[#a03039]/10 backdrop-blur-sm px-6 py-3 rounded-full text-[#a03039] font-bold mb-8 border border-[#a03039]/20">
                        <span className="w-2 h-2 bg-[#a03039] rounded-full"></span>
                        <span>Technology Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        Our <span className="text-[#a03039]">Digital Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Comprehensive technology solutions driving digital transformation for businesses across industries
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-[#a03039]/30 flex flex-col h-full relative overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a03039]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="bg-gradient-to-br from-[#a03039]/10 to-[#a03039]/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#a03039] group-hover:to-[#8a2831] transition-all duration-500 group-hover:scale-110">
                                            <Icon className="text-[#a03039] group-hover:text-white transition-all duration-500" size={36} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#a03039] transition-colors duration-300">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mt-auto group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                                    </div>
                                    
                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a03039] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-[#a03039] to-[#8a2831] rounded-3xl p-12 text-white shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-xl mb-8 opacity-90">Let's discuss how our technology solutions can accelerate your digital journey</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#a03039] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get Started Today
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#a03039] transition-all duration-300 transform hover:scale-105">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services