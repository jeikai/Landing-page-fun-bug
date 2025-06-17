import servicesData from "../data/servicesData";

const Services = () => {
    return (
        <section id="dịch vụ" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Dịch vụ của chúng tôi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Chúng tôi cung cấp các giải pháp công nghệ toàn diện từ web đến mobile, AI và game development
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group h-full">
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#a03039]/20 flex flex-col h-full">
                                    <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a03039] transition-all duration-300">
                                        <Icon className="text-[#a03039] group-hover:text-white transition-colors duration-300" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mt-auto">{service.description}</p>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services