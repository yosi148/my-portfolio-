import React, { useState, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Clock, Send, Upload, X } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    type: string;
    details: string;
    file: File | null;
  }>({
    name: '',
    email: '',
    type: 'AI Image Generation',
    details: '',
    file: null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const attachmentMsg = formState.file ? `\nAttached: ${formState.file.name}` : '';
    alert(`Thank you! This is a demo form. Your message regarding "${formState.type}" has been simulated.${attachmentMsg}`);
    
    // Reset form
    setFormState({ 
      name: '', 
      email: '', 
      type: 'AI Image Generation', 
      details: '', 
      file: null 
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const removeFile = () => {
    setFormState(prev => ({ ...prev, file: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
             Let's Create <span className="bg-yellow-400 text-slate-950 px-2 inline-block -skew-x-3">Together</span>
           </h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Explore my portfolio and see how AI-powered creativity meets professional design. Contact me for collaborations or custom projects.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Left: Info Card */}
          <div className="lg:w-1/3">
            <div className="bg-[#161822] border border-slate-800 rounded-2xl p-8 h-full">
              <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-8 text-slate-900">
                <Mail size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-slate-400 mb-8">Ready to bring your ideas to life</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-2 bg-slate-800 rounded-lg text-yellow-400">
                    <Clock size={20} />
                  </div>
                  <span>Fast response within 24 hours</span>
                </div>
                 <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-2 bg-slate-800 rounded-lg text-yellow-400">
                    <Send size={20} />
                  </div>
                  <span>Free consultation available</span>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800">
                 <h4 className="font-bold text-white mb-4">What I can help you with:</h4>
                 <ul className="space-y-2 text-slate-400 text-sm">
                   <li>• Custom AI image generation for your brand</li>
                   <li>• AI video content for social media campaigns</li>
                   <li>• Prompt engineering for consistent outputs</li>
                   <li>• Complete visual identity design</li>
                   <li>• Digital asset optimization</li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-2/3">
             <div className="bg-[#161822] border border-slate-800 rounded-2xl p-8 md:p-12">
               <h3 className="text-2xl font-bold text-white mb-8">Start Your Project</h3>
               
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-slate-300 text-sm font-semibold">Name</label>
                     <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-[#0f111a] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
                        required
                        minLength={2}
                     />
                     <span className="text-red-400 text-xs hidden">Name must be at least 2 characters</span>
                   </div>
                   <div className="space-y-2">
                     <label className="text-slate-300 text-sm font-semibold">Email</label>
                     <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-[#0f111a] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
                        required
                     />
                     <span className="text-red-400 text-xs hidden">Please enter a valid email address</span>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-slate-300 text-sm font-semibold">Project Type</label>
                   <select 
                      name="type"
                      value={formState.type}
                      onChange={handleChange}
                      className="w-full bg-[#0f111a] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors appearance-none"
                   >
                     <option>AI Image Generation</option>
                     <option>Social Media Design</option>
                     <option>AI Video Generation</option>
                     <option>Branding & Identity</option>
                     <option>Prompt Engineering</option>
                     <option>Other</option>
                   </select>
                 </div>

                 {/* File Upload Section */}
                 <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-semibold">
                      Upload Reference (Optional)
                      <span className="text-slate-500 font-normal ml-2">- For AI Images or Social Media Assets</span>
                    </label>
                    
                    {!formState.file ? (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-yellow-400 hover:bg-slate-800/30 transition-all group"
                      >
                        <div className="p-3 bg-slate-800 rounded-full text-slate-400 group-hover:text-yellow-400 group-hover:bg-slate-700 transition-colors mb-3">
                          <Upload size={24} />
                        </div>
                        <p className="text-slate-300 text-sm font-medium mb-1">Click to upload reference images or design briefs</p>
                        <p className="text-slate-500 text-xs">Supported: JPG, PNG, PDF (Max 10MB)</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                             <Upload size={20} />
                          </div>
                          <span className="text-slate-200 text-sm truncate">{formState.file.name}</span>
                          <span className="text-slate-500 text-xs whitespace-nowrap">
                            ({(formState.file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button 
                          type="button" 
                          onClick={removeFile}
                          className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-red-400 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    )}
                    
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange} 
                      className="hidden" 
                      accept="image/*,.pdf"
                    />
                 </div>

                 <div className="space-y-2">
                   <label className="text-slate-300 text-sm font-semibold">Project Details</label>
                   <textarea 
                      name="details"
                      value={formState.details}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and vision..."
                      className="w-full bg-[#0f111a] border border-slate-700 rounded-lg px-4 py-3 text-white h-32 resize-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
                      required
                   ></textarea>
                   <span className="text-red-400 text-xs">Please provide more details about your project</span>
                 </div>

                 <Button type="submit" className="w-full" icon>Send Message</Button>
               </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;