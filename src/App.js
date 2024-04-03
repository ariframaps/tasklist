import { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  const [input, setInput] = useState();
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [Index, setIndex] = useState();

  return (
    <div className="App container">
      <Header />
      <AddTask input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} isEditing={isEditing} setIsEditing={setIsEditing} Index={Index} />
      <TaskList input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} setIsEditing={setIsEditing} setIndex={setIndex} />
    </div>
  );
}

export default App;
