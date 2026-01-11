
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
      <div className="flex flex-col mb-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-black">
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
