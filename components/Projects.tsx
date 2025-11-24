import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';
import { Project } from '../types';

interface ProjectsProps {
  title: string;
  highlight?: string;
  projects: Project[];
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ title, highlight, projects, id }) => {
  return (
    <section id={id} className="py-20 bg-[#0f111a]">
      <div className="container mx-auto px-6">
        <SectionTitle title={title} highlight={highlight} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              description={project.description}
              icon={project.icon}
              tags={project.tags}
              imageUrl={project.imageUrl}
              isProject
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;