import React from 'react';
import Button from './Button';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-950 px-4 py-1 font-bold text-sm tracking-widest uppercase mb-8">
              <Sparkles size={16} />
              AI-Powered Design
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight">
              Transforming <br />
              <span className="text-yellow-400">Ideas</span> into <br />
              <span className="bg-yellow-400 text-slate-950 px-2 lg:px-4 decoration-clone leading-[1.1] inline-block transform -skew-x-2">
                Stunning Visuals
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed border-l-4 border-yellow-400 pl-6">
              I am a creative digital designer specializing in graphic design, AI-powered image generation, and AI video production. I turn concepts into high-quality visuals for brands and marketing campaigns.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => window.location.href='#portfolio'} icon>View Portfolio</Button>
              <Button variant="outline" onClick={() => window.location.href='#contact'}>Contact Me</Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
             {/* Decorative background circle */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl max-w-md w-full">
              <div className="absolute top-0 right-0 p-6 z-20">
                 <div className="w-20 h-20 bg-yellow-400/90 rounded-full blur-xl absolute -top-2 -right-2"></div>
                 <div className="relative w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                    <Sparkles className="text-slate-950 w-8 h-8" />
                 </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" 
                alt="AI Designer Portrait" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;