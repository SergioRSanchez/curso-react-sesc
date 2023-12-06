import { useContext } from 'react'

import { TaskContext } from '../../context/task-context'

import { TaskForm, TasksList, Footer, Header } from '../../components'

import '../../App.css'

function App() {

  const {
    tasks,
    addTask,
    startTask,
    closeTask,
    deleteTask
  } = useContext(TaskContext)

  return (
    <div className="app">
      <Header />

      <TaskForm addTask={addTask} />

      <TasksList
        tasks={tasks}
        startTask={startTask}
        closeTask={closeTask}
        deleteTask={deleteTask}
      />

      <Footer />
    </div>
  )
}

export default App