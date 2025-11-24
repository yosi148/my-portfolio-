import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlight, description, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        {title}
        {highlight && (
          <span className="bg-yellow-400 text-slate-950 px-2 ml-3 inline-block transform -skew-x-3">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;