import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink } from "lucide-react";
import Slider from "react-slick";
import projectsData from "../data/projectsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section
      id="dự án"
      className="py-24 bg-gradient-to-b from-white via-red-50 to-white scroll-mt-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#a03039] mb-4 drop-shadow-sm">
            Dự án nổi bật
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những dự án thể hiện kỹ năng và kinh nghiệm thông qua các ví dụ thực tế
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="flex flex-col md:flex-row items-stretch rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white overflow-hidden"
            >
              {/* Slider hoặc ảnh mặc định */}
              <div className="w-full md:w-1/2 h-60 md:h-auto">
                {project.images && project.images.length > 0 ? (
                  <Slider {...sliderSettings}>
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ))}
                  </Slider>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                    Không có ảnh minh hoạ
                  </div>
                )}
              </div>

              {/* Nội dung */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                {/* Header */}
                <div className="p-6 bg-[#a03039] text-white flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white opacity-70 hover:opacity-100"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold drop-shadow">{project.name}</h3>
                  <span
                    className={`text-xs font-semibold rounded px-3 py-1 inline-block w-fit ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description & Techs */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#fff0f1] text-[#a03039] px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
