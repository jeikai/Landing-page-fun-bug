import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import companyData from "../data/companyData";

const backgroundImages = ["/bg_2.jpg", "/bg_1.jpg", "/bg_3.jpg", "/bg_4.jpg", "/bg_5.jpg", "/bg_6.jpg", "/bg_7.jpg", "/bg_8.jpg", "/bg_9.jpg"];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0 transition-opacity duration-1000">
                {backgroundImages.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-neutral-900/40 to-black/60 mix-blend-overlay backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center pt-32 md:pt-40">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow">
                    Xây dựng giải pháp{" "}
                    <span className="text-[#a03039] inline-block relative group">
                        <span className="inline-block transform transition-transform duration-700 hover:scale-105 hover:text-white">
                            số sáng tạo
                            {/* Underline luôn hiển thị */}
                            <span className="block absolute -bottom-1 left-0 right-0 h-1 bg-[#a03039] scale-x-100 transition-transform origin-left duration-500"></span>
                        </span>
                    </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                    {companyData.mission}
                </p>

                <p className="text-md sm:text-lg text-white/80 mb-10 max-w-4xl mx-auto">
                    {companyData.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#dự án"
                        className="bg-[#a03039] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8a2831] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        Khám phá dự án
                    </a>
                    <a
                        href="#liên hệ"
                        className="border-2 border-[#a03039] text-[#a03039] px-8 py-4 rounded-full font-semibold hover:bg-[#a03039] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        Liên hệ ngay
                    </a>
                </div>

            </div>

            {/* Bullet navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {backgroundImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-[#a03039]" : "bg-gray-300"
                            } transition-all duration-300`}
                    />
                ))}
            </div>

            {/* Chevron xuống nếu muốn bật lại */}
            {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-[#a03039]" size={36} />
      </div> */}
        </section>
    );
};

export default Hero;
