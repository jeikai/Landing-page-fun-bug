import { Mail, MapPin, Phone } from 'lucide-react';
import companyData from '../data/companyData';
import contactData from '../data/contactData';
import servicesData from '../data/servicesData';

const quickLinks = ['Trang chủ', 'Dịch vụ', 'Thành tựu', 'Dự án', 'Liên hệ'];

const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-14 md:px-6 md:pb-10">
      <div className="mx-auto max-w-6xl card-shell offset-shadow overflow-hidden bg-[#fffdf9] text-[#141414]">
        <div className="grid gap-8 border-b-2 border-[#141414]/20 p-7 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:p-10">
          <div>
            <h3 className="text-3xl font-bold text-[#a03039]">{companyData.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#141414]/75">{companyData.mission}</p>

            <div className="mt-6 grid gap-3 text-sm text-[#141414]/85">
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#a03039]" />
                {contactData.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-[#a03039]" />
                {contactData.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#a03039]" />
                {contactData.address}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#141414]/60">Dịch vụ</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#141414]/80">
              {servicesData.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#141414]/60">Liên kết</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#141414]/80">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition hover:text-[#a03039]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 text-center text-xs font-semibold tracking-[0.07em] text-[#141414]/60 md:p-6">
          &copy; 2026 {companyData.name}. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
