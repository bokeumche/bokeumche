
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  topPadding?: string; // 상단 여백 조절을 위한 prop 추가
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", topPadding = "pt-24" }) => {
  return (
    <section id={id} className={`pb-24 ${topPadding} px-6 max-w-screen-xl mx-auto ${className}`}>
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900">{title}</h2>
      </div>
      <div className="unclickable">
        {children}
      </div>
    </section>
  );
};

export default Section;
