import { useEffect, useState } from 'react';
import companyData from '../data/companyData';

const backgroundImages = [
  '/bg_2.jpg',
  '/bg_1.jpg',
  '/bg_3.jpg',
  '/bg_4.jpg',
  '/bg_5.jpg',
  '/bg_6.jpg',
  '/bg_7.jpg',
  '/bg_8.jpg',
  '/bg_9.jpg',
  '/bg_10.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trang chủ" className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="section-title-chip">Innovation Studio</span>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-[#141414] sm:text-5xl lg:text-6xl">
            Xây dựng giải pháp{' '}
            <span className="inline rounded-2xl border-2 border-[#141414] bg-[#a03039] px-3 text-white">
              số sáng tạo
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#141414]/80">{companyData.mission}</p>
          <p className="max-w-2xl text-base leading-relaxed text-[#141414]/65">{companyData.description}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#dự án"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#141414] bg-[#a03039] px-7 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
            >
              Khám phá dự án
            </a>
            <a
              href="#liên hệ"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#141414] bg-white px-7 py-3 text-sm font-extrabold text-[#141414] transition hover:bg-[#f8e6e8]"
            >
              Liên hệ ngay
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {companyData.stats.map((stat) => (
              <div key={stat.label} className="card-shell offset-shadow-sm px-4 py-3">
                <p className="text-2xl font-bold text-[#a03039]">{stat.number}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#141414]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-shell offset-shadow overflow-hidden">
          <div className="relative noise-grid p-4">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border-2 border-[#141414] bg-[#141414] sm:h-[430px]">
              {backgroundImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/65" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{companyData.name}</p>
                <h2 className="mt-2 max-w-sm text-2xl font-bold leading-tight">{companyData.slogan}</h2>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {backgroundImages.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Chuyển ảnh ${idx + 1}`}
                  className={`h-3 w-3 rounded-full border border-[#141414] transition-all duration-300 ${
                    idx === currentIndex ? 'bg-[#a03039]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
