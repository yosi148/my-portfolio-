import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  tags?: string[];
  imageUrl?: string;
  isProject?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon, tags, imageUrl, isProject = false }) => {
  return (
    <div className={`
      group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#161822] 
      hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)] 
      transition-all duration-300 h-full flex flex-col
    `}>
      {/* Icon Bubble for Skills */}
      {!isProject && Icon && (
        <div className="p-8 pb-0">
          <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6 text-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} strokeWidth={2.5} />
          </div>
        </div>
      )}

      {/* Project Icon Header */}
      {isProject && Icon && (
        <div className="absolute top-6 left-6 z-10">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 shadow-md">
            <Icon size={20} strokeWidth={2.5} />
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className={`flex-1 flex flex-col ${isProject ? 'p-8 pt-16' : 'p-8 pt-2'}`}>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-6 flex-1">
          {description}
        </p>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;