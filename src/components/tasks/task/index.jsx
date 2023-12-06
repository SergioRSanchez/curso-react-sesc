import { useContext } from 'react'
import { ProjectContext } from '../../../context/project-context'

import { Typography } from '@mui/material'

import './style.css'

export function Task({
  id,
  title,
  category,
  member,
  idProject,
  status,
  startTask,
  closeTask,
  deleteTask
}) {

  const { projects } = useContext(ProjectContext)

  const getTitleProjectById = (idProject) => {
    const filteredProject = projects.find((currentProject) => currentProject.id === idProject)

    return filteredProject ? filteredProject.title : 'Projeto não encontrado';
  }

  return (
    <div key={id}>
      <hr />

      <div className="task">
        <img
          src={`https://github.com/${member}.png`}
          alt="member image"
          className='task-img-member'
        />
        <div className='task-content'>
          <h2 className="task-title">{title}</h2>
          <Typography
            variant='body2'
          >
            {getTitleProjectById(idProject)}
          </Typography>
          <a href={`https://github.com/${member}`} target='_blank'><span className="task-member">{member}</span></a>
          <span className="task-category">{category}</span>
          <span className={`task-${status}`}>{status}</span>
        </div>
        <div className="task-actions">
          <button className="btn-start" onClick={() => startTask(id)}>Iniciar</button>
          <button className="btn-close" onClick={() => closeTask(id)}>Finalizar</button>
          <button className="btn-delete" onClick={() => deleteTask(id)}>X</button>
        </div>
      </div>
    </div>
  )
}