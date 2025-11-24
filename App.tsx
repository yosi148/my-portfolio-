import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Button from './components/Button';
import { IMAGE_PROJECTS, VIDEO_PROJECTS, PROMPT_PROJECTS } from './constants';
import { ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f111a] text-white overflow-x-hidden selection:bg-yellow-400 selection:text-slate-900">
      <Header />
      
      <main>
        <Hero />
        <Skills />
        
        <div id="portfolio">
          <Projects 
            title="AI Image Projects" 
            projects={IMAGE_PROJECTS} 
          />
          <Projects 
            title="AI Video Projects" 
            projects={VIDEO_PROJECTS} 
          />
          
          {/* Prompt Engineering Section has a specific footer call to action in the mock, handling separately or adapting Projects component */}
           <section className="py-20 bg-[#0f111a]">
            <div className="container mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                  Prompt <span className="text-yellow-400">Engineering</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {PROMPT_PROJECTS.map((project) => (
                  <div key={project.id} className="group relative bg-[#161822] border border-slate-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                       <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900">
                          {project.icon && <project.icon size={20} />}
                       </div>
                       <ExternalLink size={20} className="text-slate-600 group-hover:text-yellow-400 transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-6 min-h-[60px]">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-700 text-slate-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                 <Button onClick={() => window.location.href='#contact'} icon>
                    View Full Portfolio
                 </Button>
              </div>
            </div>
          </section>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;