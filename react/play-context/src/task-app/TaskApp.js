/* eslint-disable no-unused-vars */
import './TaskApp.css';
import TasksProvider from './TasksProvider';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskApp() {
  return (
    <div className="taskapp">
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
