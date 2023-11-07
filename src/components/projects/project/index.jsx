export function Project({ id, title, description, start, deadline, endDate, client, status, idTeam }) {
  return (
    <div key={id}>
      <hr />

      <div className="task">
        {/* <img
          src={`https://github.com/${member}.png`}
          alt="member image"
          className='task-img-member'
        /> */}
        <div className='task-content'>
          <h2 className="task-title">{title}</h2>
          {/* <a href={`https://github.com/${member}`} target='_blank'><span className="task-member">{member}</span></a> */}
          <span className="task-category">{title}</span>
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