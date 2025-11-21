import achievementsData from "../data/achievementsData";
import { Award } from "lucide-react";

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-gradient-to-br from-[#a03039] to-[#8a2831] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-bold mb-8 border border-white/30">
                        <Award size={20} />
                        <span>Company Milestones</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        Our <span className="text-white/90">Achievements</span>
                    </h2>
                    <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Recognized excellence in technology innovation and digital transformation solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 relative overflow-hidden">
                                {/* Gradient accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a03039] to-transparent"></div>
                                
                                <div className="flex items-start mb-6">
                                    <div className="bg-gradient-to-r from-[#a03039] to-[#8a2831] p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Award className="text-white" size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm text-[#a03039] font-bold uppercase tracking-wider bg-[#a03039]/10 px-3 py-1 rounded-full">{achievement.period}</span>
                                        <h3 className="text-2xl font-black text-gray-900 mt-3 mb-2 group-hover:text-[#a03039] transition-colors duration-300">{achievement.title}</h3>
                                        <p className="text-[#a03039] font-bold mb-4">{achievement.organization}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-base">{achievement.description}</p>
                                
                                {/* Bottom right accent */}
                                <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#a03039]/10 rounded-full group-hover:bg-[#a03039]/20 transition-colors duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-4xl font-black text-white mb-2">50+</div>
                        <div className="text-white/90 font-medium">Projects Delivered</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-4xl font-black text-white mb-2">5+</div>
                        <div className="text-white/90 font-medium">Enterprise Clients</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-4xl font-black text-white mb-2">99%</div>
                        <div className="text-white/90 font-medium">Client Satisfaction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-4xl font-black text-white mb-2">24/7</div>
                        <div className="text-white/90 font-medium">Support Service</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements