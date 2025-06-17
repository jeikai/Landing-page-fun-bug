import achievementsData from "../data/achievementsData";
import { Award } from "lucide-react";

const Achievements = () => {
    return (
        <section id="thành tựu" className="py-20 bg-gradient-to-br from-red-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Thành tựu đạt được
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Những giải thưởng và thành tựu nổi bật trong hành trình phát triển của FunBug
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className="group">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#a03039]">
                                <div className="flex items-start mb-4">
                                    <div className="bg-[#a03039] p-3 rounded-full mr-4">
                                        <Award className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm text-[#a03039] font-semibold">{achievement.period}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{achievement.title}</h3>
                                        <p className="text-gray-600 font-medium mb-3">{achievement.organization}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements