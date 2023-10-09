import { useState } from 'react';

import { NewProjectModal } from './components/new-project-modal';
import { ProjectCard } from './components/project-card';

export function DashboardPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: 'Project 1',
      description: 'This is a sample project.',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-around p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
      <div
        className="flex items-center justify-center w-64 h-64 bg-gray-200 rounded-md shadow-lg cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <span className="text-5xl font-bold text-gray-600">+</span>
      </div>
      <NewProjectModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
    </div>
  );
}
