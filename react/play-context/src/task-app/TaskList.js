import { useContext, useState } from 'react';
import { TasksContext, DispatchContext } from './TasksProvider';

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    tasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
        />
      );
    })
  );
}

const Task = ({ task }) => {
  const dispatch = useContext(DispatchContext);
  const [edit, setEdit] = useState(false);

  const updateTask = (e) => {
    const parent = e.target.parentElement;
    const id = parseInt(parent.id, 10);
    const text = (edit) ?
      parent.querySelector('.task-input').value :
      parent.querySelector('.task-text').textContent;
    // checked state already been changed before firing the click event.
    const done = parent.querySelector('.task-checkbox').checked;
    dispatch({
      type: 'edit',
      task: {id, text, done},
    });
  }

  const handleDeleteTask = (e) => {
    const id = parseInt(e.target.parentElement.id, 10);
    dispatch({
      type: 'delete',
      id,
    });
  }

  return (
    <div
      className="task"
      id={task.id}
    >
      <input
        id={task.id}
        className="task-checkbox"
        type="checkbox" 
        checked={task.done}
        onChange={updateTask}
      />
      {(edit === true) ?
        <input
          type="text"
          className="task-input"
          value={task.text}
          onChange={updateTask}
        /> :
        <label
          htmlFor={task.id}
          className="task-text"
        >{task.text}</label>
      }
      {(edit === true) ? 
        <button
          className="task-savebtn"
          onClick={(e) => {
            updateTask(e);
            setEdit(false);
          }}
        >Save</button> :
        <button
          className="task-editbtn"
          onClick={() => setEdit(true)}
        >Edit</button>
      }
      <button
        className="task-deletebtn"
        onClick={handleDeleteTask}
      >Delete</button>
    </div>
  );
}

