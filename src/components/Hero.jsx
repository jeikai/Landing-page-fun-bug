import companyData from '../data/companyData';
import SpiderModel from './SpiderModel';

const Hero = () => {
  return (
    <section id="trang chủ" className="px-4 pb-10 pt-4 sm:pt-6 md:px-6 md:pb-16 md:pt-8">
      <div className="mx-auto grid max-w-6xl items-center gap-7 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 md:space-y-6">
          <span className="section-title-chip">Innovation Studio</span>

          <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-[#141414] sm:text-4xl md:text-5xl lg:text-6xl">
            Xây dựng giải pháp{' '}
            <span className="mt-1 inline-block whitespace-nowrap rounded-2xl border-2 border-[#141414] bg-[#a03039] px-3 text-white">
              số sáng tạo
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-[#141414]/80 sm:text-lg">{companyData.mission}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-[#141414]/65 sm:text-base">{companyData.description}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#dự án"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#141414] bg-[#a03039] px-7 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 sm:w-auto"
            >
              Khám phá dự án
            </a>
            <a
              href="#liên hệ"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#141414] bg-white px-7 py-3 text-sm font-extrabold text-[#141414] transition hover:bg-[#f8e6e8] sm:w-auto"
            >
              Liên hệ ngay
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {companyData.stats.map((stat) => (
              <div key={stat.label} className="card-shell offset-shadow-sm px-4 py-3">
                <p className="text-xl font-bold text-[#a03039] sm:text-2xl">{stat.number}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#141414]/70 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-shell offset-shadow relative overflow-hidden bg-[#141414] p-5 text-white sm:p-6">
          <div className="hero-scene relative mx-auto w-full max-w-[440px]">
            <div className="hero-orbit hero-orbit-1" />
            <div className="hero-orbit hero-orbit-2" />

            <div className="hero-model-wrapper">
              <SpiderModel />
            </div>

          </div>

          <div className="mt-5 rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{companyData.name}</p>
            <h2 className="mt-2 text-lg font-bold leading-tight sm:text-xl">{companyData.slogan}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
