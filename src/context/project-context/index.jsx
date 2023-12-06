import { createContext, useState } from 'react';

import dataProjects from '../../data/data-projects.json'

import { format } from 'date-fns';

export const ProjectContext = createContext({})

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(dataProjects);

  const addProject = (
    title,
    description,
    startDate,
    deadline,
    endDate,
    client,
    status,
    idTeam
  ) => {
    if (!title || !description || !deadline || !client || !status || !idTeam) return;
    const newProjectArray = [
      ...projects,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
        startDate: startDate ? format(startDate, 'yyyy/MM/dd') : '',
        deadline: deadline ? format(deadline, 'yyyy/MM/dd') : '',
        endDate: endDate ? format(endDate, 'yyyy/MM/dd') : '',
        client,
        idTeam,
        status: "todo"
      }
    ];
    setProjects(newProjectArray)
  }

  const startProject = (id) => {
    const newProjects = [...projects];
    newProjects.map((project) =>
      project.id === id ? (project.status = 'doing') : project
    );
    setProjects(newProjects);
  }

  const closeProject = (id) => {
    const newProjects = [...projects];
    newProjects.map((project) =>
      project.id === id ? (project.status = 'done') : project
    );
    setProjects(newProjects);
  }

  const deleteProject = (id) => {
    const newProjects = [...projects];
    const filteredProjects = newProjects.filter(project => project.id !== id ? project : null);
    setProjects(filteredProjects);
  }

  return (
    <ProjectContext.Provider value={{ projects, addProject, startProject, closeProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  )
}