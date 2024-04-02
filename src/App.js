import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
