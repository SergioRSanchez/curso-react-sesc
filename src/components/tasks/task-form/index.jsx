import { useState } from 'react'

import './style.css'

import dataCategories from '../../../data/data-categories.json'
import dataMembers from '../../../data/data-members.json'

export function TaskForm({ tasks, setTasks }) {

  const [categories] = useState(dataCategories)
  const [members] = useState(dataMembers)


  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [member, setMember] = useState('')


  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !category || !member) {
      alert('Preencha todos os campos')
      return
    }

    setTasks([...tasks, { id: Math.floor(Math.random() * 10000), title, category, member, status: "todo" }])
    setTitle('')
    setCategory('')
    setMember('')
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Digite o título da tarefa'
          />


          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={member}
            onChange={(e) => setMember(e.target.value)}
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

          <button type="submit" className='btn-register' disabled={!title || !category || !member}>Cadastrar</button>
        </form>

      </div>
    </section>
  )
}