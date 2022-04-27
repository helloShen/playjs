import { useReducer, createContext } from 'react';

// context
export const TasksContext = createContext(null);
export const DispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  // reducer
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const initialTasks = [
  {id: 0, text: "Visite Kafka Museum", done: true },
  {id: 1, text: "Watch a puppet show", done: false },
  {id: 2, text: "Lennon Wall", done: false },
];

let nextId = 3;

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'add': {
      return [...tasks, {
        id: nextId++,
        text: action.text,
        done: false,
      }]; 
    }
    case 'edit': {
      return tasks.map((oldTask) => {
        return (oldTask.id === action.task.id) ?
          action.task : oldTask;
      });
    }
    case 'delete': {
      return tasks.filter((task) => {
        return task.id !== action.id;
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
