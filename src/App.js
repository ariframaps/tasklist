import { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  const [input, setInput] = useState({});
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App container">
      <Header />
      <AddTask input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
