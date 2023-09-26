import { useState } from 'react'
import './App.css'

import dataCategories from './data/data-categories.json'
import dataMembers from './data/data-members.json'
import dataTask from './data/data-tasks.json'

function App() {

  const [categories] = useState(dataCategories)
  const [members] = useState(dataMembers)
  const [tasks, setTasks] = useState(dataTask)


  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [member, setMember] = useState('')


  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !category || !member) {
      alert('Preencha todos os campos')
      return
    }

    setTasks([...tasks, { id: tasks.length + 1, title, category, member, status: "todo" }])
    setTitle('')
    setCategory('')
    setMember('')
  }

  return (
    <>
      <div className="app">

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

              <button type="submit" className='btn-register'>Cadastrar</button>
            </form>

          </div>
        </section>

        <section className="section-main">
          <div className="container-card">
            <h1>Lista de tarefas</h1>

            {
              tasks && tasks.map((task) => {
                return (
                  <div key={task.id}>
                    <hr />

                    <div className="task">
                      <img
                        src={`https://github.com/${task.member}.png`}
                        alt="member image"
                        className='task-img-member'
                      />
                      <div className='task-content'>
                        <h2 className="task-title">{task.title}</h2>
                        <span className="task-member">{task.member}</span>
                        <span className="task-category">{task.category}</span>
                        <span className={`task-${task.status}`}>{task.status}</span>
                      </div>
                      <div className="task-actions">
                        <button className="btn-start">Iniciar</button>
                        <button className="btn-close">Finalizar</button>
                        <button className="btn-delete">X</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </section>

      </div>

      <footer className='footer-main'>
        <p>
          <strong>Introdução ao Desenvolvimento Front-end com React</strong>
        </p>
        <p>Professor: Anderson Carvalho</p>
      </footer>
    </>
  )
}

export default App