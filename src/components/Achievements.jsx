import { Award, Sparkles } from 'lucide-react';
import achievementsData from '../data/achievementsData';

const Achievements = () => {
  return (
    <section id="thành tựu" className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-title-chip">Highlights</span>
            <h2 className="mt-4 text-4xl font-bold text-[#141414] md:text-5xl">Thành tựu đạt được</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[#141414]/70 md:text-lg">
            Những giải thưởng và thành tựu nổi bật trong hành trình phát triển của FunBug.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {achievementsData.map((achievement) => (
            <article key={achievement.id} data-aos="fade-up" className="card-shell offset-shadow p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#141414]/70">
                    <Sparkles size={14} className="text-[#a03039]" />
                    {achievement.period}
                  </p>
                  <h3 className="text-2xl font-bold text-[#141414]">{achievement.title}</h3>
                  <p className="mt-2 font-semibold text-[#141414]/70">{achievement.subtitle}</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#a03039] text-white">
                  <Award size={22} />
                </span>
              </div>
              <p className="leading-relaxed text-[#141414]/80">{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
