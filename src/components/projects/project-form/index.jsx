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
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [currentDeadline, setCurrentDeadline] = useState("");
  const [currentEndDate, setCurrentEndDate] = useState("");
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !currentProject ||
      !currentTitle ||
      !currentDescription ||
      !currentStartDate ||
      !currentDeadline ||
      !currentEndDate ||
      !currentClient ||
      !currentStatus ||
      !currentTeam
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    addProject(currentProject,
      currentTitle,
      currentDescription,
      currentStartDate,
      currentDeadline,
      currentEndDate,
      currentClient,
      currentStatus,
      currentTeam);
    setCurrentProject("");
    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate("");
    setCurrentDeadline("");
    setCurrentEndDate("");
    setCurrentClient("");
    setCurrentStatus("");
    setCurrentTeam("");
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
                setCurrentTitle(event.target.value)
            }
          />

          <label htmlFor='description'>Descrição</label>
          <input
            type='text'
            name='description'
            id='description'
            placeholder='Digite a descrição'
            value={currentDescription}
            onChange={
              (event) =>
                setCurrentDescription(event.target.value)
            }
          />

          <label htmlFor='startDate'>Data de início</label>
          <input
            type='date'
            name='startDate'
            id='startDate'
            value={currentStartDate}
            onChange={
              (event) =>
                setCurrentStartDate(event.target.value)
            }
          />

          <label htmlFor='deadline'>Prazo final</label>
          <input
            type='date'
            name='deadline'
            id='deadline'
            value={currentDeadline}
            onChange={
              (event) =>
                setCurrentDeadline(event.target.value)
            }
          />

          <label htmlFor='endDate'>Data de término</label>
          <input
            type='date'
            name='endDate'
            id='endDate'
            value={currentEndDate}
            onChange={
              (event) =>
                setCurrentEndDate(event.target.value)
            }
          />

          <label htmlFor='client'>Cliente</label>
          <input
            type='text'
            name='client'
            id='client'
            value={currentClient}
            placeholder='Insira nome do cliente'
            onChange={
              (event) =>
                setCurrentClient(event.target.value)
            }
          />

          <label htmlFor='team'>Time</label>
          <select
            name='team'
            id='team'
            value={currentTeam}
            onChange={
              (event) =>
                setCurrentTeam(event.target.value)
            }
          >
            <option value="">Selecione um time</option>
            {teams && teams.map((teams => {
              return (
                <React.Fragment key={teams.id}>
                  <option value={teams.name}>{teams.name}</option>
                </React.Fragment>
              )
            }))}
          </select>

          <button className='btn-register' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}