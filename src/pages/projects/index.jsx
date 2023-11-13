import { ProjectForm, ProjectList, Footer, Header } from './../../components/index'

function ProjectsPage() {
  return (
    <div>
      <Header />

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