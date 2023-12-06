import { useState, useContext } from 'react'

import { ProjectContext } from '../../../context/project-context'

import dataCategories from '../../../data/data-categories.json'
import dataMembers from '../../../data/data-members.json'

import './style.css'

export function TaskForm({ addTask }) {

  const { projects } = useContext(ProjectContext)

  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentMember, setCurrentMember] = useState("");
  const [currentProject, setCurrentProject] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentTask || !currentCategory || !currentMember || !currentProject) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    addTask(currentTask, currentCategory, currentMember, currentProject);
    setCurrentTask("");
    setCurrentCategory("");
    setCurrentMember("");
    setCurrentProject("")
    alert("Tarefa cadastrada com sucesso!");
  }

  return (
    <section className="section-main">
      <div className="container-card">
        <h1>Cadastrar tarefa</h1>
        <hr />

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id='title'
            name='title'
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            placeholder='Digite o título da tarefa'
          />


          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            value={currentCategory}
            onChange={(e) => setCurrentCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            {
              categories && categories.map((category) => {
                return (
                  <option key={category.id} value={category.title}>{category.title}</option>
                )
              })
            }
          </select>

          <label htmlFor="member">Membro</label>
          <select
            name="member"
            id="member"
            value={currentMember}
            onChange={(e) => setCurrentMember(e.target.value)}
          >
            <option value="">Selecione um membro da equipe</option>
            {
              members && members.map((member) => {
                return (
                  <option key={member.id} value={member.profile}>{member.name}</option>
                )
              })
            }
          </select>

          <label htmlFor="project">Projeto</label>
          <select
            name="project"
            id="project"
            value={currentProject}
            onChange={(e) => setCurrentProject(Number(e.target.value))}
          >
            <option value="">Selecione o projeto</option>
            {
              projects && projects.map((project) => {
                return (
                  <option key={project.id} value={project.id}>{project.title}</option>
                )
              })
            }
          </select>

          <button type="submit" className='btn-register' disabled={!currentTask || !currentCategory || !currentMember || !currentProject}>Cadastrar</button>
        </form>

      </div>
    </section>
  )
}