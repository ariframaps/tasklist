import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  const storageKey = {
    tasks: 'taskListKey',
    theme: 'themeKey'
  }

  const [input, setInput] = useState({});
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem(storageKey.tasks)) || []);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem(storageKey.theme)) || 'theme1');

  useEffect(() => {
    localStorage.setItem(storageKey.tasks, JSON.stringify(taskList));
  }, [taskList])

  useEffect(() => {
    localStorage.setItem(storageKey.theme, JSON.stringify(theme));
  }, [theme])

  return (
    <div className="App container d-flex flex-column align-items-center">
      <Header theme={theme} setTheme={setTheme} />
      <main className="w-75">
        <AddTask input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} storageKey={storageKey} />
        <TaskList input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}

export default App;
