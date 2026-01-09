
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
        <div className="relative z-10 text-center w-full max-w-3xl flex flex-col items-center">
          <h1 className="text-[52px] sm:text-7xl md:text-8xl font-medium tracking-tighter text-black mb-4">
            채보금
          </h1>
          <p className="text-[18px] sm:text-2xl font-normal text-zinc-700 tracking-tight mb-6">
            interactor | project-based roles
          </p>
          <p className="text-zinc-500 text-[13px] sm:text-sm md:text-[17px] leading-relaxed md:leading-[1.8] font-normal max-w-[320px] sm:max-w-md md:max-w-none mx-auto break-keep whitespace-normal">
            프로젝트에 따라 다양한 역할을 수행하는 interactor 입니다.<span className="hidden md:inline"><br /></span>
            <span className="md:inline"> 프리랜서로 브랜드 기획·운영, 콘텐츠 기획, 상업 프로젝트, 타투 작업 등</span><span className="hidden md:inline"><br /></span>
            <span className="md:inline"> 경계를 넘나들며 일합니다.</span>
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
            <div key={item.id} className="flex items-center justify-start gap-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center bg-transparent overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg sm:text-xl font-medium mb-1 text-black tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal break-keep">
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
              <h3 className="text-lg sm:text-xl font-medium mb-1 text-black tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
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
                  <span className="text-[10px] tracking-[0.12em] text-zinc-400 mb-2 font-normal">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium mb-1 text-black tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
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
        <div className="pb-16 opacity-10">
          <div className="w-px h-24 bg-black mx-auto"></div>
        </div>
        
        <div className="flex flex-col mb-2">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-black">
            Contact
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl w-full">
            <h3 className="text-zinc-500 text-[13px] sm:text-sm md:text-base leading-relaxed font-normal break-keep whitespace-normal mb-8">
              {CONTACT_INFO.headline}
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[10px] font-normal uppercase tracking-[0.12em] mb-1">Email</p>
                <button 
                  onClick={handleCopyEmail}
                  className="text-lg sm:text-xl font-normal text-zinc-700 tracking-tight hover:text-black transition-colors text-left outline-none focus:outline-none"
                  title="이메일 주소 복사하기"
                >
                  {CONTACT_INFO.email}
                </button>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[10px] font-normal uppercase tracking-[0.12em] mb-1">More</p>
                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  {CONTACT_INFO.socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl font-normal text-zinc-700 tracking-tight hover:text-black transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-zinc-300 text-[10px] uppercase tracking-widest text-right w-full md:w-auto font-normal mt-20 md:mt-0 whitespace-nowrap">
            {CONTACT_INFO.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
