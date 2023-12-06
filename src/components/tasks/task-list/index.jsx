import './style.css'

import { Task } from '../task'

export function TasksList({ tasks, startTask, closeTask, deleteTask }) {

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
                member={task.member}
                category={task.category}
                idProject={task.idProject}
                status={task.status}
                startTask={startTask}
                closeTask={closeTask}
                deleteTask={deleteTask}
              />
            )
          })
        }

      </div>
    </section >
  )
}