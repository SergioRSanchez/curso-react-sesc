import { ProjectForm, ProjectList, Footer } from './../../components/index'

function ProjectsPage() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Listagem de projetos</h1>

      <div className="app">
        <ProjectForm />

        <ProjectList />

        <Footer />
      </div>
    </div>
  )
}

export default ProjectsPage;