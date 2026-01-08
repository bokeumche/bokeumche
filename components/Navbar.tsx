
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'branding', 'planning', 'projects', 'tattoo', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // 섹션이 화면 중앙 근처에 올 때 활성화
          return rect.top >= -200 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Branding', id: 'branding' },
    { label: 'Planning', id: 'planning' },
    { label: 'Projects', id: 'projects' },
    { label: 'Tattoo', id: 'tattoo' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
      <div className="w-full mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex w-full max-w-lg justify-between items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 text-center py-1 transition-all duration-300 border-b-2 ${
                activeSection === item.id 
                  ? 'text-black border-black font-semibold' 
                  : 'text-zinc-400 border-transparent font-medium hover:text-zinc-600'
              }`}
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-tighter sm:tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
