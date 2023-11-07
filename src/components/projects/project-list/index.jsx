import { useState } from 'react';

import { Project } from '../project';

import dataProjects from '../../../data/data-projects.json';

export function ProjectList() {
  const [projects] = useState(dataProjects);

  return (
    <section className="section-main">
      <div className="container-card">
        <h1>Lista de projetos</h1>

        {
          projects && projects.map((project) => {
            return (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                member={project.member}
                status={project.status}
              // setTasks={setTasks}
              // tasks={tasks}
              />
            )
          })
        }

      </div>
    </section >
  )
}