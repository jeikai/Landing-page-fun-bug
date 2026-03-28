import { ArrowUpRight } from 'lucide-react';
import servicesData from '../data/servicesData';

const Services = () => {
  return (
    <section id="dịch vụ" className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-title-chip">Our Services</span>
            <h2 className="mt-4 text-4xl font-bold text-[#141414] md:text-5xl">Dịch vụ của chúng tôi</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[#141414]/70 md:text-lg">
            Chúng tôi cung cấp các giải pháp công nghệ toàn diện từ web đến mobile, AI và game development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                data-aos="fade-up"
                className="card-shell offset-shadow group flex h-full flex-col justify-between p-7 transition duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#141414] bg-[#f8e6e8]">
                    <Icon className="text-[#a03039]" size={30} />
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-[#141414]">{service.title}</h3>
                  <p className="mb-5 font-semibold text-[#141414]/65">{service.subtitle}</p>
                  <p className="text-[#141414]/75">{service.description}</p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border-2 border-[#141414] bg-white px-3 py-1 text-xs font-bold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#141414] bg-[#a03039] text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
