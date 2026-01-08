
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { BRANDING_DATA, PLANNING_DATA, PROJECTS_DATA, TATTOO_DATA, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = CONTACT_INFO.email;

    // 클립보드 복사 로직 (최신 API + 폴백)
    if (navigator.clipboard && window.isSecureContext) {
      // 최신 브라우저 및 HTTPS 환경
      navigator.clipboard.writeText(email).then(() => {
        alert('이메일 주소가 복사되었습니다.');
      }).catch(err => {
        console.error('클립보드 복사 실패:', err);
        fallbackCopyTextToClipboard(email);
      });
    } else {
      // 이전 브라우저나 비보안 환경 폴백
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // 화면 밖으로 보냄
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

      {/* Hero Section / Introduction */}
      <header id="home" className="h-[90vh] flex items-center justify-center relative overflow-hidden px-6 pt-20 unclickable">
        <div className="relative z-10 text-center w-full max-w-2xl flex flex-col items-center">
          {/* 이름 (가장 크게) */}
          <h1 className="text-[64px] sm:text-8xl md:text-9xl font-bold tracking-tighter text-black mb-4">
            채보금
          </h1>
          
          {/* 역할 (중간 크기, 슬림하게) */}
          <p className="text-[20px] sm:text-3xl font-normal text-zinc-700 tracking-tight mb-6">
            interactor | project-based roles
          </p>
          
          {/* 설명 문구 */}
          <p className="text-zinc-500 text-[13px] sm:text-sm md:text-base leading-relaxed font-light max-w-[280px] sm:max-w-md mx-auto break-keep whitespace-normal">
            프로젝트에 따라 다양한 역할을 수행하는 interactor 프리랜서입니다. 브랜드 기획·운영, 콘텐츠 기획, 상업 프로젝트, 타투 작업을 넘나들며 일합니다.
          </p>
          
          <div className="pt-12 opacity-10">
            <div className="w-px h-24 bg-black mx-auto"></div>
          </div>
        </div>
      </header>

      {/* Branding Section - Horizontal Layout with Centering */}
      <Section id="branding" title="Branding" topPadding="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {BRANDING_DATA.map((item) => (
            <div key={item.id} className="flex items-center justify-center gap-6">
              {/* Image Container (Left) */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center bg-transparent overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              {/* Text Container (Right) */}
              <div className="flex flex-col text-left max-w-[200px] sm:max-w-xs">
                <h3 className="text-lg font-bold mb-1 text-black leading-tight">{item.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-snug break-keep">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Planning Section - Image Ratio 3:2 */}
      <Section id="planning" title="Planning" className="border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANNING_DATA.map((item) => (
            <div key={item.id}>
              <div className="aspect-[3/2] overflow-hidden mb-4 bg-zinc-100 rounded-lg">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-black">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section - Conditional object fit for 4th and 6th items */}
      <Section id="projects" title="Projects" className="border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS_DATA.map((item, index) => {
            // 4th item is index 3, 6th item is index 5
            const isFullImage = index === 3 || index === 5;
            
            return (
              <div key={item.id}>
                <div className="aspect-video overflow-hidden mb-6 bg-white rounded-lg border border-zinc-100 flex items-center justify-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className={`w-full h-full ${isFullImage ? 'object-cover' : 'object-contain'}`} 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">{item.subtitle}</span>
                  <h3 className="text-2xl font-bold mb-3 text-black">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Tattoo Section */}
      <Section id="tattoo" title="Tattoo Design" className="border-t border-zinc-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TATTOO_DATA.map((item) => (
            <div key={item.id} className="aspect-[2/3] overflow-hidden bg-zinc-100 rounded-lg">
              <img 
                src={item.imageUrl} 
                alt="Tattoo Design" 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-24 px-6 border-t border-zinc-100 bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl w-full">
            {/* Headline (Matching Hero Name style, but scaled down) */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-black mb-8 break-keep">
              {CONTACT_INFO.headline}
            </h2>

            <div className="space-y-8">
              {/* Contact Block (Matching Hero Role style, but scaled down) */}
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[11px] font-light uppercase tracking-widest mb-2">Email</p>
                <button 
                  onClick={handleCopyEmail}
                  className="text-lg sm:text-2xl font-normal text-zinc-700 tracking-tight hover:text-black transition-colors text-left outline-none focus:outline-none"
                  title="이메일 주소 복사하기"
                >
                  {CONTACT_INFO.email}
                </button>
              </div>

              {/* Socials Block (Matching Hero Role style, but scaled down) */}
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[11px] font-light uppercase tracking-widest mb-2">Socials</p>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {CONTACT_INFO.socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-2xl font-normal text-zinc-700 tracking-tight hover:text-black transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright (Subtle) */}
          <div className="text-zinc-300 text-[10px] uppercase tracking-widest text-right w-full md:w-auto font-bold mt-16 md:mt-0 whitespace-nowrap">
            {CONTACT_INFO.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
