import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Eye, Calendar, Code2 } from "lucide-react";
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
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#a03039] rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[#a03039] font-semibold mb-6 shadow-lg">
            <Code2 size={20} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a03039] to-blue-600 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Projects showcasing our skills and experience through real-world examples, 
            from web applications to mobile apps
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#a03039] via-blue-500 to-[#a03039] h-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-20">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-[#a03039] shadow-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#a03039] to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Project Card */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'}`}>
                    <div className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                      
                      {/* Image Section */}
                      <div className="relative w-full h-64 overflow-hidden">
                        {project.images && project.images.length > 0 ? (
                          <div className="relative h-full">
                            <Slider {...sliderSettings} className="h-full project-slider">
                              {project.images.map((img, i) => (
                                <div key={i} className="h-full">
                                  <img
                                    src={img}
                                    alt={`${project.name} - Image ${i + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                </div>
                              ))}
                            </Slider>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500">
                            <div className="text-center">
                              <Code2 size={48} className="mx-auto mb-2 opacity-50" />
                              <p className="text-sm font-medium">Updating Images</p>
                            </div>
                          </div>
                        )}
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${
                              project.status === "Completed"
                                ? "bg-green-500/90 text-white"
                                : project.status === "Doing"
                                ? "bg-blue-500/90 text-white"
                                : "bg-yellow-500/90 text-white"
                            }`}
                          >
                            {project.status === "Completed" ? "Completed" : 
                             project.status === "In Progress" ? "In Progress" : project.status}
                          </span>
                        </div>

                        {/* Timeline Arrow */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                          index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                        }`}>
                          <div className={`w-0 h-0 border-solid ${
                            index % 2 === 0 
                              ? 'border-l-[20px] border-l-white border-y-[12px] border-y-transparent' 
                              : 'border-r-[20px] border-r-white border-y-[12px] border-y-transparent'
                          }`}></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-gradient-to-r from-[#a03039] to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              {project.category}
                            </span>
                            <div className="flex items-center gap-1 text-[#a03039]">
                              <Calendar size={14} />
                              <span className="text-sm font-semibold">{project.year}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-black text-gray-800 mb-3 leading-tight">
                            {project.name}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 px-2 py-1 rounded-lg text-xs font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-semibold">
                                +{project.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2">
                          {project.link && project.link !== "" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#a03039] to-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                              <Eye size={14} />
                              <span>Demo</span>
                            </a>
                          )}
                          
                          {project.github && project.github !== "" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                              <Code2 size={14} />
                              <span>Code</span>
                            </a>
                          )}
                          
                          <button className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm hover:border-[#a03039] hover:text-[#a03039] transition-all duration-200">
                            <ExternalLink size={14} />
                            <span>Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Node */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
            <div className="w-12 h-12 bg-gradient-to-r from-[#a03039] to-red-600 rounded-full shadow-xl flex items-center justify-center">
              <Code2 size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-slider .slick-dots {
          bottom: 10px;
        }
        
        .project-slider .slick-dots li button:before {
          color: white;
          font-size: 10px;
          opacity: 0.7;
        }
        
        .project-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #a03039;
        }

        @media (max-width: 1024px) {
          .timeline-container .timeline-line {
            left: 32px;
          }
          
          .timeline-container .timeline-item {
            margin-left: 64px;
          }
          
          .timeline-container .timeline-node {
            left: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
