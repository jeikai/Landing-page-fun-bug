import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ExternalLink } from "lucide-react";

// Danh sách màu gradient
const gradients = [
  "from-[#a03039] via-pink-500 to-red-500",
  "from-[#4b6cb7] via-[#182848] to-[#4b6cb7]",
  "from-green-400 via-teal-500 to-green-600",
  "from-purple-500 via-fuchsia-600 to-pink-500",
  "from-yellow-400 via-yellow-500 to-orange-500",
  "from-indigo-400 via-blue-500 to-indigo-600",
  "from-gray-400 via-gray-500 to-gray-600"
];

// Hàm chọn màu ngẫu nhiên
const getRandomGradient = () => {
  const index = Math.floor(Math.random() * gradients.length);
  return gradients[index];
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://api.funbug.xyz/api/project");

        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="dự án" className="py-24 bg-gradient-to-b from-white via-red-50 to-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#a03039] mb-4 drop-shadow-sm">
            Dự án nổi bật
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những dự án thể hiện kỹ năng và kinh nghiệm thông qua các ví dụ thực tế
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => {
              const randomGradient = getRandomGradient();

              return (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  className="group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#a03039]/30 transform hover:-translate-y-2 bg-white overflow-hidden"
                >
                  {/* Gradient Header */}
                  <div className={`p-6 bg-gradient-to-tr ${randomGradient} text-white`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                        {project.category}
                      </span>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-0 sm:absolute top-4 right-4 text-white group-hover:text-white transition-opacity duration-300"
                      >
                        <ExternalLink
                          className="opacity-60 group-hover:opacity-100 sm:block"
                          size={20}
                        />
                        <span className="text-sm sm:hidden block underline">Link</span>
                      </a>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 leading-snug drop-shadow">
                      {project.name}
                    </h3>

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

                  {/* Body */}
                  <div className="p-6 flex flex-col justify-between h-full">
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#fff0f1] text-[#a03039] px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
