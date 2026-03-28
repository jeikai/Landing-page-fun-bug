import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import companyData from '../data/companyData';

const navItems = ['Trang chủ', 'Dịch vụ', 'Thành tựu', 'Dự án', 'Liên hệ'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto max-w-6xl rounded-full border-2 border-[#141414] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fffdf9]/95 backdrop-blur-md offset-shadow-sm'
            : 'bg-[#fffdf9]'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-7">
          <a href="#trang chủ" className="flex items-center gap-3">
            <img src="./logo.png" alt="Logo" className="h-11 w-11 rounded-full border-2 border-[#141414]" />
            <div>
              <p className="text-xl font-bold leading-none text-[#a03039]">
                {companyData.name}
              </p>
              <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#141414]/60 md:block">
                Digital Partner
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full border-2 border-transparent px-4 py-2 text-sm font-bold text-[#141414] transition hover:border-[#141414] hover:bg-[#f8e6e8]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#liên hệ"
              className="inline-flex items-center rounded-full border-2 border-[#141414] bg-[#a03039] px-5 py-2 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
            >
              Bắt đầu dự án
            </a>
          </div>

          <button
            className="rounded-full border-2 border-[#141414] bg-white p-2 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t-2 border-[#141414] bg-[#fffdf9] px-4 pb-4 pt-3 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-xl border-2 border-[#141414] bg-white px-4 py-2 text-sm font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
