import { Project } from '../project';

export function ProjectList({ projects, deleteProject, startProject, closeProject }) {

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
                description={project.description}
                startDate={project.startDate}
                deadline={project.deadline}
                endDate={project.endDate}
                client={project.client}
                idTeam={project.idTeam}
                status={project.status}
                deleteProject={deleteProject}
                startProject={startProject}
                closeProject={closeProject}
              />
            )
          })
        }

      </div>
    </section >
  )
}