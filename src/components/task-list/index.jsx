import './style.css'

import { Task } from './../index.js'

export function TasksList({ tasks, setTasks }) {

  return (
    <section className="section-main">
      <div className="container-card">
        <h1>Lista de tarefas</h1>

        {
          tasks && tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                category={task.category}
                member={task.member}
                status={task.status}
                setTasks={setTasks}
                tasks={tasks}
              />
            )
          })
        }

      </div>
    </section >
  )
}