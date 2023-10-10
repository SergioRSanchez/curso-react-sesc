import './style.css'

export function TasksList({ tasks, setTasks }) {

  function handleStartTask(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: "doing" }
      } else {
        return task
      }
    }))
  }

  function handleFinishTask(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: "done" }
      } else {
        return task
      }
    }))
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
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
                    <a href={`https://github.com/${task.member}`} target='_blank'><span className="task-member">{task.member}</span></a>
                    <span className="task-category">{task.category}</span>
                    <span className={`task-${task.status}`}>{task.status}</span>
                  </div>
                  <div className="task-actions">
                    <button className="btn-start" onClick={() => handleStartTask(task.id)}>Iniciar</button>
                    <button className="btn-close" onClick={() => handleFinishTask(task.id)}>Finalizar</button>
                    <button className="btn-delete" onClick={() => handleDeleteTask(task.id)}>X</button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </section >
  )
}