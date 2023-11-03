import dataCategories from '../../../data/data-categories.json';
import dataMembers from '../../../data/data-members.json';
import dataProjects from '../../../data/data-projects.json';
import dataTeams from '../../../data/data-team.json';
import React, { useState } from 'react'
// import './style.css'

export function ProjectForm({ addProject }) {
  const [categories] = useState(dataCategories);
  const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  const [members] = useState(dataMembers);
  const [currentProject, setCurrentProject] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [currentDeadline, setCurrentDeadline] = useState("");
  const [currentEndDate, setCurrentEndDate] = useState("");
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !currentProject ||
      !currentTeam ||
      !currentTitle ||
      !currentDescription ||
      !currentStartDate ||
      !currentDeadline ||
      !currentEndDate ||
      !currentClient ||
      !currentStatus
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    addProject(currentProject,
      currentTeam,
      currentTitle,
      currentDescription,
      currentStartDate,
      currentDeadline,
      currentEndDate,
      currentClient,
      currentStatus);
    setCurrentProject("");
    setCurrentTeam("");
    setCurrentMember("");
    alert("Tarefa cadastrada com sucesso!");
  }

  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Cadastrar projeto</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Título</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Digite o título'
            value={currentProject}
            onChange={
              (event) =>
                setCurrentProject(event.target.value)
            }
          />
          <label htmlFor='category'>Categoria</label>
          <select
            name='category'
            id='category'
            value={currentTeam}
            onChange={
              (event) =>
                setCurrentTeam(event.target.value)
            }
          >
            <option value="">Selecione uma categoria</option>
            {categories && categories.map((category => {
              return (
                <React.Fragment key={category.id}>
                  <option value={category.title}>{category.title}</option>
                </React.Fragment>
              )
            }))}
          </select>
          {/* <label htmlFor='member'>Membros</label>
          <select
            name='member'
            id='member'
            value={currentMember}
            onChange={
              (event) => {
                setCurrentMember(event.target.value)
              }
            }
          >
            <option value="">Selecione um membro da equipe</option>
            {members && members.map((member) => {
              return (
                <React.Fragment key={member.id}>
                  <option value={member.profile}>{member.name}</option>
                </React.Fragment>
              )
            })}
          </select> */}
          <button className='btn-register' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}