import { ProjectForm } from './project-form';

function ProjectsPage() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Listagem de projetos</h1>

      <div className="app">
        <ProjectForm />
      </div>
    </div>
  )
}

export default ProjectsPage;