
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { BRANDING_DATA, PLANNING_DATA, PROJECTS_DATA, TATTOO_DATA, CONTACT_INFO, SPACING_CONFIG } from './constants';

interface PlanningSliderProps {
  images: string[];
}

const PlanningSlider: React.FC<PlanningSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // 화면 노출 감지 로직
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% 이상 보일 때 활성화
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  // 화면에 보일 때만 타이머 작동
  useEffect(() => {
    if (!isVisible || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <div ref={sliderRef} className="relative w-full h-full overflow-hidden group">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
        </div>
      ))}
      
      {/* 슬라이더 인디케이터 */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white scale-110' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [brandingIndex, setBrandingIndex] = useState(0);

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

  const renderSocialLabel = (name: string) => {
    if (name === 'click! (download)') {
      return (
        <span className="text-lg sm:text-xl tracking-tight transition-colors">
          <span className="font-normal text-zinc-700 group-hover:text-black">click! </span>
          <span className="font-light text-zinc-400 group-hover:text-black">(download)</span>
        </span>
      );
    }
    return (
      <span className="text-lg sm:text-xl tracking-tight transition-colors font-normal text-zinc-700 group-hover:text-black">
        {name}
      </span>
    );
  };

  const nextBranding = () => {
    setBrandingIndex((prev) => (prev + 1) % BRANDING_DATA.length);
  };

  const prevBranding = () => {
    setBrandingIndex((prev) => (prev - 1 + BRANDING_DATA.length) % BRANDING_DATA.length);
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
      <Section id="branding" title="Branding">
        <div className="relative w-full max-w-2xl mx-auto" style={{ marginTop: `${SPACING_CONFIG.branding.titleGap * 0.25}rem` }}>
          <div className="flex items-center justify-between gap-1 pointer-events-auto">
            <button onClick={prevBranding} className="p-1 text-zinc-300 hover:text-black transition-colors z-10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-44 h-44 sm:w-60 sm:h-60 flex items-center justify-center">
                <img src={BRANDING_DATA[brandingIndex].imageUrl} alt="Branding Logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <button onClick={nextBranding} className="p-1 text-zinc-300 hover:text-black transition-colors z-10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
          <div className="flex flex-col items-center w-full" style={{ marginTop: `${SPACING_CONFIG.branding.imageToTextGap * 0.25}rem` }}>
            <div className="max-w-[240px] sm:max-w-[320px] text-center pointer-events-auto">
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal break-keep">
                {BRANDING_DATA[brandingIndex].description}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 pointer-events-auto" style={{ marginTop: `${SPACING_CONFIG.branding.indicatorGap * 0.25}rem` }}>
            {BRANDING_DATA.map((_, idx) => (
              <button key={idx} onClick={() => setBrandingIndex(idx)} className={`w-1.2 h-1.2 rounded-full transition-all ${idx === brandingIndex ? 'bg-black w-3' : 'bg-zinc-200 hover:bg-zinc-400'} cursor-pointer`} />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="border-t border-zinc-100">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 pointer-events-auto"
          style={{ 
            paddingTop: `${SPACING_CONFIG.projects.titleGap * 0.25}rem`,
            rowGap: `${SPACING_CONFIG.projects.itemGap * 0.25}rem`
          }}
        >
          {PROJECTS_DATA.map((item, index) => {
            const isFullImage = index === 3 || index === 5;
            return (
              <div key={item.id} className="flex flex-col">
                <div className="aspect-video overflow-hidden bg-white rounded-lg border border-zinc-50 flex items-center justify-center shadow-sm" style={{ marginBottom: `${SPACING_CONFIG.projects.imageToTitleGap * 0.25}rem` }}>
                  <img src={item.imageUrl} alt={item.title} className={`w-full h-full ${isFullImage ? 'object-cover' : 'object-contain'}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.12em] text-zinc-400 mb-2 font-normal">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-black tracking-tight leading-snug" style={{ marginBottom: `${SPACING_CONFIG.projects.titleToDescGap * 0.25}rem` }}>
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

      {/* Planning Section */}
      <Section id="planning" title="Planning" className="border-t border-zinc-100">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 pointer-events-auto" 
          style={{ 
            paddingTop: `${SPACING_CONFIG.planning.titleGap * 0.25}rem`,
            rowGap: `${SPACING_CONFIG.planning.itemGap * 0.25}rem`
          }}
        >
          {PLANNING_DATA.map((item) => (
            <div key={item.id}>
              <div className="aspect-[3/2] overflow-hidden bg-zinc-100 rounded-lg shadow-sm" style={{ marginBottom: `${SPACING_CONFIG.planning.imageToTitleGap * 0.25}rem` }}>
                <PlanningSlider images={item.imageUrls || [item.imageUrl]} />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-black tracking-tight" style={{ marginBottom: `${SPACING_CONFIG.planning.titleToDescGap * 0.25}rem` }}>
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tattoo Section */}
      <Section id="tattoo" title="Tattoo Work" className="border-t border-zinc-100">
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 pointer-events-auto"
          style={{ 
            paddingTop: `${SPACING_CONFIG.tattoo.titleGap * 0.25}rem`,
            gap: `${SPACING_CONFIG.tattoo.itemGap * 0.25}rem`
          }}
        >
          {TATTOO_DATA.map((item) => (
            <div key={item.id} className="aspect-[2/3] overflow-hidden bg-zinc-100 rounded-lg group">
              <img src={item.imageUrl} alt="Tattoo Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact / Footer */}
      <footer id="contact" className="pb-32 pt-12 px-6 bg-white max-w-screen-xl mx-auto pointer-events-auto">
        <div className="pb-16 opacity-10"><div className="w-px h-24 bg-black mx-auto"></div></div>
        <div className="flex flex-col" style={{ marginBottom: `${SPACING_CONFIG.contact.titleGap * 0.25}rem` }}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-black">Contact</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl w-full">
            <h3 className="text-zinc-500 text-[13px] sm:text-sm md:text-base leading-relaxed font-normal break-keep whitespace-normal mb-8">
              {CONTACT_INFO.headline}
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[10px] font-normal uppercase tracking-[0.12em] mb-1">Email</p>
                <button onClick={handleCopyEmail} className="text-lg sm:text-xl font-normal text-zinc-700 tracking-tight hover:text-black transition-colors text-left outline-none focus:outline-none cursor-pointer">
                  {CONTACT_INFO.email}
                </button>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-zinc-400 text-[10px] font-normal uppercase tracking-[0.12em] mb-1">Portfolio</p>
                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  {CONTACT_INFO.socials.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group transition-all border-b border-zinc-200 hover:border-black pb-0.5">
                      {renderSocialLabel(social.name)}
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
