import { Mail, MapPin, Phone } from 'lucide-react';
import contactData from '../data/contactData';

const Contact = () => {
  return (
    <section id="liên hệ" className="scroll-mt-20 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-title-chip">Contact</span>
            <h2 className="mt-4 text-4xl font-bold text-[#141414] md:text-5xl">Liên hệ với chúng tôi</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[#141414]/70 md:text-lg">
            Sẵn sàng biến ý tưởng của bạn thành hiện thực? Hãy liên hệ ngay!
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="card-shell offset-shadow-sm p-5">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#f8e6e8]">
                <Phone className="text-[#a03039]" size={20} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#141414]/60">Điện thoại</p>
              <p className="mt-1 text-lg font-bold text-[#141414]">{contactData.phone}</p>
            </div>

            <div className="card-shell offset-shadow-sm p-5">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#f8e6e8]">
                <Mail className="text-[#a03039]" size={20} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#141414]/60">Email</p>
              <p className="mt-1 text-lg font-bold text-[#141414]">{contactData.email}</p>
            </div>

            <div className="card-shell offset-shadow-sm p-5">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#f8e6e8]">
                <MapPin className="text-[#a03039]" size={20} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#141414]/60">Địa chỉ</p>
              <p className="mt-1 text-lg font-bold text-[#141414]">{contactData.address}</p>
            </div>
          </div>

          <div className="card-shell offset-shadow p-6 md:p-8">
            <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <label className="grid gap-2 text-sm font-bold">
                Họ và tên
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="rounded-xl border-2 border-[#141414] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a03039]"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl border-2 border-[#141414] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a03039]"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Nội dung
                <textarea
                  rows="5"
                  placeholder="Mô tả ngắn về dự án bạn muốn triển khai..."
                  className="rounded-xl border-2 border-[#141414] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a03039]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-[#141414] bg-[#a03039] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
