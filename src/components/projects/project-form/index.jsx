import React, { useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, MenuItem, Select, TextField, InputLabel, Input } from '@mui/material';

import { ptBR } from 'date-fns/locale';

import dataTeams from '../../../data/data-team.json';

import './style.css'

export function ProjectForm({ addProject }) {
  const [teams] = useState(dataTeams);

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState(null);
  const [currentDeadline, setCurrentDeadline] = useState(null);
  const [currentEndDate, setCurrentEndDate] = useState(null);
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("todo");
  const [currentTeam, setCurrentTeam] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !currentTitle ||
      !currentDescription ||
      !currentDeadline ||
      !currentClient ||
      !currentTeam
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    addProject(
      currentTitle,
      currentDescription,
      currentStartDate,
      currentDeadline,
      currentEndDate,
      currentClient,
      currentStatus,
      currentTeam);
    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate(null);
    setCurrentDeadline(null);
    setCurrentEndDate(null);
    setCurrentClient("");
    setCurrentStatus("");
    setCurrentTeam("");

    alert("Projeto cadastrado com sucesso!");
  }

  return (
    <section className='section-main'>
      <div className='container-card'>
        <Box
          sx={{
            '& .MuiTextField-root': { marginY: 1 },
          }}
        >
          <h1>Cadastrar projeto</h1>
          <hr />

          <form onSubmit={handleSubmit}>


            <TextField
              fullWidth
              id='outlined-basic'
              name='title'
              label='Digite o título'
              variant='outlined'
              value={currentTitle}
              onChange={
                (event) =>
                  setCurrentTitle(event.target.value)
              }
            />

            <TextField
              fullWidth
              id='description'
              name='description'
              label='Digite a descrição do projeto'
              placeholder="Digite a descrição do projeto"
              value={currentDescription}
              multiline
              rows={6}
              variant='outlined'
              onChange={
                (event) =>
                  setCurrentDescription(event.target.value)
              }
            />

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

            <TextField
              select
              fullWidth
              label="Equipe"
              name="team"
              id="team"
              value={currentTeam}
              onChange={(event) => setCurrentTeam(event.target.value)}
            >
              <MenuItem value="">Selecione uma equipe</MenuItem>
              {teams &&
                teams.map((team) => {
                  return (
                    <MenuItem key={team.id} value={team.id}>
                      {team.name}
                    </MenuItem>
                  );
                })}
            </TextField>

            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                gap: {
                  md: '1rem',
                }
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                <DatePicker
                  label="Data de início"
                  id="startDate"
                  value={currentStartDate}
                  onChange={(newValue) => setCurrentStartDate(newValue)}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                <DatePicker
                  id="endDate"
                  label="Data de término"
                  value={currentEndDate}
                  onChange={(newValue) => setCurrentEndDate(newValue)}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                <DatePicker
                  id="deadline"
                  label="Previsão de entrega"
                  value={currentDeadline}
                  onChange={(newValue) => setCurrentDeadline(newValue)}
                />
              </LocalizationProvider>
            </Box>

            <button className='btn-register' type='submit'>
              Cadastrar
            </button>
          </form>
        </Box>
      </div>
    </section>
  )
}