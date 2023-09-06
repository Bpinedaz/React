import './App.css'
import Headers from './components/Header';
import NewTask from './components/newtask';
import { Tasklist } from './components/tasklist'
import TaskCounter from './components/taskcounter';

function App() {
 
  const task_list = [
    { name: "Buy a new gaming laptop" },
    { name: "complete previous task" },
    { name: "create video for Youtube" },
    { name: "create a new portafolio" },
    ];

  return (
    <>
    <Headers/>
    
    <div>
    <h1>All App</h1>
    <NewTask></NewTask>
    
     <Tasklist List={task_list}/>
    
    </div>
    <div>
      <TaskCounter/>
    </div>
     

    </>
  )
}

export default App
