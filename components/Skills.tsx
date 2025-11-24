import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0f111a] relative">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Skills &" 
          highlight="Expertise"
          centered
          description="I craft precise AI prompts to generate images and videos efficiently, maintaining creativity, realism, and impact across all digital platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <Card
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;