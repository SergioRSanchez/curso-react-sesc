import React, { useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ptBR } from 'date-fns/locale';

import dataCategories from '../../../data/data-categories.json';
import dataMembers from '../../../data/data-members.json';
import dataProjects from '../../../data/data-projects.json';
import dataTeams from '../../../data/data-team.json';

import './style.css'
import { TextField } from '@mui/material';

export function ProjectForm({ addProject }) {
  const [categories] = useState(dataCategories);
  const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  const [currentProject, setCurrentProject] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState(null);
  const [currentDeadline, setCurrentDeadline] = useState(null);
  const [currentEndDate, setCurrentEndDate] = useState(null);
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !currentProject ||
      !currentTitle ||  // OK
      !currentDescription || // Ok
      !currentStartDate ||
      !currentDeadline ||
      !currentEndDate ||
      !currentClient || // OK
      !currentStatus ||
      !currentTeam // OK
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

  console.log(currentStartDate)

  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Cadastrar projeto</h1>
        <hr />
        <form onSubmit={handleSubmit}>

           {/* <label htmlFor='title'>Título</label>
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
          /> */}

          <TextField
            id='outline-basic'
            fullWidth
            label='Digite o título'
            variant='outlined'
            value={currentTitle}
            onChange={
              (event) =>
                setCurrentTitle(event.target.value)
            }
          />

          <label htmlFor='description'>Descrição</label>
          <textarea
            name='description'
            id='description'
            placeholder='Digite a descrição do projeto'
            value={currentDescription}
            onChange={
              (event) =>
                setCurrentDescription(event.target.value)
            }
          />

          {/* <label htmlFor='startDate'>Data de início</label> */}
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DatePicker onChange={(newValue) => setCurrentStartDate(newValue)} value={currentStartDate} label="Data de início" />
          </LocalizationProvider>

          {/* <label htmlFor='deadline'>Prazo final</label>
          <input
            type='date'
            name='deadline'
            id='deadline'
            value={currentDeadline}
            onChange={
              (event) =>
                setCurrentDeadline(event.target.value)
                teste
            }
          /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DatePicker onChange={(newValue) => setCurrentDeadline(newValue)} value={currentDeadline} label="Prazo final" />
          </LocalizationProvider>

          {/* <label htmlFor='endDate'>Data de término</label>
          <input
            type='date'
            name='endDate'
            id='endDate'
            value={currentEndDate}
            onChange={
              (event) =>
                setCurrentEndDate(event.target.value)
            }
          /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DatePicker onChange={(newValue) => setCurrentEndDate(newValue)} value={currentEndDate} label="Data de término" />
          </LocalizationProvider>

          <TextField
            id='outline-basic'
            fullWidth
            label='Cliente'
            variant='outlined'
            value={currentClient}
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
            {teams && teams.map((team => {
              return (
                <React.Fragment key={team.id}>
                  <option value={team.id}>{team.name}</option>
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