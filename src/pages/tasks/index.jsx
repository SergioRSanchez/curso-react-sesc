import { useState } from 'react'
import '../../App.css'

import dataTask from './../../data/data-tasks.json'

import { TaskForm, TasksList, Footer, Header } from '../../components'


function App() {

  const [tasks, setTasks] = useState(dataTask)

  return (
    <div className="app">
      <Header />

      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
      />

      <TasksList
        tasks={tasks}
        setTasks={setTasks}
      />

      <Footer />
    </div>
  )
}

export default App