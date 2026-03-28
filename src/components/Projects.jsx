import { ArrowUpRight, ExternalLink } from 'lucide-react';
import projectsData from '../data/projectsData';

const getPrimaryImage = (project) => {
  if (project.images && project.images.length > 0) {
    return project.images[0];
  }

  return '/bg_1.jpg';
};

const getSecondaryImage = (project) => {
  if (project.images && project.images.length > 1) {
    return project.images[1];
  }

  return getPrimaryImage(project);
};

const Projects = () => {
  return (
    <section id="dự án" className="scroll-mt-20 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-title-chip">Selected Work</span>
            <h2 className="mt-4 text-4xl font-bold text-[#141414] md:text-5xl">Dự án nổi bật</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[#141414]/70 md:text-lg">
            Những dự án thể hiện kỹ năng và kinh nghiệm thông qua các ví dụ thực tế.
          </p>
        </div>

        <div className="grid gap-6">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              className={`card-shell offset-shadow grid overflow-hidden ${
                index % 2 === 0 ? 'md:grid-cols-[0.95fr_1.05fr]' : 'md:grid-cols-[1.05fr_0.95fr]'
              }`}
            >
              <div
                className={`relative min-h-[320px] border-b-2 border-[#141414] p-4 md:border-b-0 ${
                  index % 2 === 0 ? 'md:border-r-2' : 'md:order-2 md:border-l-2'
                }`}
              >
                <div className="grid h-full gap-3 sm:grid-cols-[1fr_0.42fr]">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#141414]">
                    <img
                      src={getPrimaryImage(project)}
                      alt={project.name}
                      className="h-full min-h-[220px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border-2 border-[#141414] bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em]">
                      {project.year}
                    </span>
                  </div>

                  <div className="hidden gap-3 sm:grid">
                    <img
                      src={getSecondaryImage(project)}
                      alt={`${project.name} preview`}
                      className="h-full rounded-2xl border-2 border-[#141414] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className={`flex flex-col justify-between p-7 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border-2 border-[#141414] bg-[#f8e6e8] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em]">
                      {project.category}
                    </span>
                    <span
                      className={`rounded-full border-2 border-[#141414] px-3 py-1 text-xs font-extrabold ${
                        project.status === 'Completed'
                          ? 'bg-[#a03039] text-white'
                          : 'bg-[#ffd66e] text-[#141414]'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#141414]">{project.name}</h3>
                  <p className="mt-4 leading-relaxed text-[#141414]/75">{project.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full border-2 border-[#141414] bg-white px-3 py-1 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 ? (
                    <span className="rounded-full border-2 border-[#141414] bg-[#141414] px-3 py-1 text-xs font-bold text-white">
                      +{project.technologies.length - 4}
                    </span>
                  ) : null}
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-5 py-2 text-sm font-extrabold text-white transition hover:bg-[#a03039]"
                  >
                    Xem chi tiết
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#141414] bg-white text-[#141414] transition hover:bg-[#f8e6e8]"
                    aria-label={`Truy cập dự án ${project.name}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
