import './style.css'

export function Task({ id, title, category, member, status, tasks, setTasks }) {
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
    <div key={id}>
      <hr />

      <div className="task">
        <img
          src={`https://github.com/${member}.png`}
          alt="member image"
          className='task-img-member'
        />
        <div className='task-content'>
          <h2 className="task-title">{title}</h2>
          <a href={`https://github.com/${member}`} target='_blank'><span className="task-member">{member}</span></a>
          <span className="task-category">{category}</span>
          <span className={`task-${status}`}>{status}</span>
        </div>
        <div className="task-actions">
          <button className="btn-start" onClick={() => handleStartTask(id)}>Iniciar</button>
          <button className="btn-close" onClick={() => handleFinishTask(id)}>Finalizar</button>
          <button className="btn-delete" onClick={() => handleDeleteTask(id)}>X</button>
        </div>
      </div>
    </div>
  )
}