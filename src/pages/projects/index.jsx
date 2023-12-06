import { useContext } from 'react';

import { ProjectContext } from '../../context/project-context';

import { ProjectForm, ProjectList, Footer, Header } from './../../components/index'

import { format } from 'date-fns';

function ProjectsPage() {

  const {
    projects,
    addProject,
    startProject,
    closeProject,
    deleteProject
  } = useContext(ProjectContext)

  return (
    <div>
      <Header />

      <h1 style={{ color: 'white' }}>Listagem de projetos</h1>

      <div className="app">
        <ProjectForm
          addProject={addProject}
        />

        <ProjectList
          projects={projects}
          deleteProject={deleteProject}
          startProject={startProject}
          closeProject={closeProject}
        />

        <Footer />
      </div>
    </div>
  )
}

export default ProjectsPage;