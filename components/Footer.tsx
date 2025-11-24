import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Yellow Bar */}
      <div className="w-full h-16 bg-yellow-400"></div>
      
      {/* Content */}
      <div className="bg-[#0f111a] py-12 text-center">
         <p className="text-slate-300 mb-2 font-medium">Transforming Ideas into Stunning Visuals with AI & Design</p>
         <p className="text-slate-500 text-sm">© 2024 AI Designer Portfolio. Crafted with AI-powered creativity.</p>
      </div>
    </footer>
  );
};

export default Footer;