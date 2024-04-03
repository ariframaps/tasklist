import { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  const [input, setInput] = useState({});
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App container d-flex flex-column align-items-center">
      <Header />
      <main className="w-75">
        <AddTask input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} />
        <TaskList input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}

export default App;
