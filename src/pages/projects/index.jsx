import { ProjectForm } from './project-form';
import { ProjectList } from './project-list';

function ProjectsPage() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Listagem de projetos</h1>

      <div className="app">
        <ProjectForm />

        <ProjectList />
      </div>
    </div>
  )
}

export default ProjectsPage;