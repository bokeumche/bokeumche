
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { BRANDING_DATA, PLANNING_DATA, PROJECTS_DATA, TATTOO_DATA, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = CONTACT_INFO.email;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        alert('이메일 주소가 복사되었습니다.');
      }).catch(err => {
        console.error('클립보드 복사 실패:', err);
        fallbackCopyTextToClipboard(email);
      });
    } else {
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      alert('이메일 주소가 복사되었습니다.');
    } catch (err) {
      console.error('복사 실패:', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="h-[80vh] flex items-center justify-center relative overflow-hidden px-6 pt-20 unclickable">
        <div className="relative z-10 text-center w-full max-w-2xl flex flex-col items-center">
          <h1 className="text-[64px] sm:text-8xl md:text-9xl font-bold tracking-tighter text-black mb-4">
            채보금
          </h1>
          <p className="text-[20px] sm:text-3xl font-normal text-zinc-700 tracking-tight mb-6">
            interactor | project-based roles
          </p>
          <p className="text-zinc-500 text-[13px] sm:text-sm md:text-base leading-relaxed font-light max-w-[280px] sm:max-w-md mx-auto break-keep whitespace-normal">
            프로젝트에 따라 다양한 역할을 수행하는 interactor 프리랜서입니다. 브랜드 기획·운영, 콘텐츠 기획, 상업 프로젝트, 타투 작업을 넘나들며 일합니다.
          </p>
          <div className="pt-8 opacity-10">
            <div className="w-px h-24 bg-black mx-auto"></div>
          </div>
        </div>
      </header>

      {/* Branding Section */}
      <Section id="branding" title="Branding" topPadding="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {BRANDING_DATA.map((item) => (
            <div key={item.id} className="flex items-start justify-start gap-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center bg-transparent overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light break-keep">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Planning Section */}
      <Section id="planning" title="Planning" className="border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {PLANNING_DATA.map((item) => (
            <div key={item.id}>
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-zinc-100 rounded-lg shadow-sm">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PROJECTS_DATA.map((item, index) => {
            const isFullImage = index === 3 || index === 5;
            return (
              <div key={item.id} className="flex flex-col">
                <div className="aspect-video overflow-hidden mb-8 bg-white rounded-lg border border-zinc-50 flex items-center justify-center shadow-sm">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className={`w-full h-full ${isFullImage ? 'object-cover' : 'object-contain'}`} 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] tracking-[0.12em] text-zinc-400 mb-2 font-bold">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Tattoo Section */}
      <Section id="tattoo" title="Tattoo Work" className="border-t border-zinc-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TATTOO_DATA.map((item) => (
            <div key={item.id} className="aspect-[2/3] overflow-hidden bg-zinc-100 rounded-lg group">
              <img 
                src={item.imageUrl} 
                alt="Tattoo Work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact / Footer */}
      <footer id="contact" className="pb-32 pt-12 px-6 bg-white max-w-screen-xl mx-auto">
        {/* Tattoo와 Contact 사이 세로선 데코레이션 - 간격 좁힘 */}
        <div className="pb-16 opacity-10">
          <div className="w-px h-24 bg-black mx-auto"></div>
        </div>
        
        <div className="flex flex-col mb-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-black">
            Contact
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl w-full">
            <h3 className="text-zinc-500 text-[13px] sm:text-sm md:text-base leading-relaxed font-light break-keep whitespace-normal mb-10">
              {CONTACT_INFO.headline}
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.12em] mb-1">Email</p>
                <button 
                  onClick={handleCopyEmail}
                  className="text-xl sm:text-2xl font-bold text-zinc-700 tracking-tight hover:text-black transition-colors text-left outline-none focus:outline-none"
                  title="이메일 주소 복사하기"
                >
                  {CONTACT_INFO.email}
                </button>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.12em] mb-1">Socials</p>
                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  {CONTACT_INFO.socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-bold text-zinc-700 tracking-tight hover:text-black transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-zinc-300 text-[10px] uppercase tracking-widest text-right w-full md:w-auto font-bold mt-20 md:mt-0 whitespace-nowrap">
            {CONTACT_INFO.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
