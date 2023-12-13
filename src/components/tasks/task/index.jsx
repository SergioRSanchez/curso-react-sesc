import { useContext } from 'react'

import { ProjectContext } from '../../../context/project-context'
import { TaskContext } from '../../../context/task-context';

import { Typography } from '@mui/material'

import './style.css'

export function Task({
  id,
  title,
  idMember,
  idCategory,
  idProject,
  status,
  startTask,
  closeTask,
  deleteTask
}) {

  const { projects } = useContext(ProjectContext)
  const { categories, members } = useContext(TaskContext);

  const getTitleProjectById = () => {
    const filteredProject = projects.find((currentProject) => currentProject.id === idProject)
    return filteredProject?.attributes.title ? filteredProject?.attributes.title : "Erro";
  }
  const getMemberNameById = () => {
    const filteredMember = members.find((currentMember) => currentMember.id === idMember)
    return filteredMember?.attributes.name ? filteredMember?.attributes.name : "Erro";
  }
  const getMemberProfileById = () => {
    const filteredMember = members.find((currentMember) => currentMember.id === idMember)
    return filteredMember?.attributes.profile ? filteredMember?.attributes.profile : "Erro";
  }
  const getCategoryNameById = () => {
    const filteredCategory = categories.find((currentCategory) => currentCategory.id === idCategory)
    return filteredCategory?.attributes.title ? filteredCategory?.attributes.title : "Erro";
  }

  return (
    <div key={id}>
      <hr />

      <div className="task">
        <img
          src={`https://github.com/${getMemberProfileById(idMember)}.png`}
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
          <a href={`https://github.com/${idMember}`} target='_blank'><span className="task-member">{getMemberNameById(idMember)}</span></a>
          <span className="task-category">{getCategoryNameById(idCategory)}</span>
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