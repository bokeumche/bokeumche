
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  topPadding?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", topPadding = "pt-20" }) => {
  return (
    <section id={id} className={`pb-20 ${topPadding} px-6 max-w-screen-xl mx-auto ${className}`}>
      <div className="flex flex-col mb-16">
        {/* 섹션 대제목: 폰트 위계는 유지하고 하단 밑줄 요소는 제거 */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-black">
          {title}
        </h2>
      </div>
      <div className="unclickable">
        {children}
      </div>
    </section>
  );
};

export default Section;
