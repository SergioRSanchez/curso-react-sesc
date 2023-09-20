import { useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState('')

  return (
    <div className="app">
      <section className="section-main">
        <div className="container-card">
          <h1>Cadastrar tarefa</h1>
          <hr />

          <form>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id='title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Digite o título da tarefa'
            />
          </form>

          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
          >
            <option value="">Selecione uma categoria</option>
            <option value="uxui">UX/UI</option>
            <option value="development">Development</option>
            <option value="devops">DevOps</option>
          </select>

          <label htmlFor="member">Membro</label>
          <select
            name="member"
            id="member"
          >
            <option value="">Selecione um membro da equipe</option>
            <option value="amanda">Amanda Silva</option>
            <option value="paula">Paula Joyce</option>
          </select>

          <button type="submit" className='btn-register'>Cadastrar</button>
        </div>
      </section>

      <section className="section-task">
        <div className="container-card">
          <h1>Lista de tarefas</h1>
          <hr />

          <section className="cards">
            <div className='card'>
              <img src="" alt="" />
            </div>
          </section>
        </div>
      </section>

      <footer className='footer'>
        <p>
          <strong>Introdução ao Desenvolvimento Front-end com React</strong>
        </p>
        <p>Professor: Anderson Carvalho</p>
      </footer>
    </div>
  )
}

export default App