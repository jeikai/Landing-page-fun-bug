import { useEffect, useState } from 'react';

const galleryImages = [
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

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 pb-12 md:px-6 md:pb-16">
      <div className="mx-auto max-w-6xl card-shell offset-shadow overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b-2 border-[#141414] bg-[#141414] p-6 text-white md:border-b-0 md:border-r-2 md:p-8">
            <span className="section-title-chip !bg-white !text-[#141414]">Showcase</span>
            <h3 className="mt-5 text-3xl font-bold leading-tight">Khoảnh khắc sản phẩm & dự án</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Bộ sưu tập hình ảnh từ hành trình triển khai giải pháp số của FunBug, từ sản phẩm học tập đến hệ
              thống thực tế cho doanh nghiệp.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">
                Web Development
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">
                Mobile Application
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">
                AI Experience
              </span>
            </div>
          </div>

          <div className="relative p-3 sm:p-4">
            <div className="relative h-[270px] overflow-hidden rounded-2xl border-2 border-[#141414] sm:h-[340px] md:h-[390px]">
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Chuyển ảnh ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full border border-[#141414] transition-all duration-300 sm:h-3 sm:w-3 ${
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

export default HeroCarousel;
