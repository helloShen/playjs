import { useContext } from 'react';
import { DispatchContext } from './TasksProvider';

function AddTask() {
  const dispatch = useContext(DispatchContext);

  const handleAddTask = () => {
    const input = document.querySelector(".addTaskInput");
    dispatch({
      type: 'add',
      text: input.value,
    });
    input.value = '';
  }
  
  return (
    <>
      <input
        className="addTaskInput"
        type="text"
        placeholder="Add task"
      />
      <button
        className="addTaskBtn"
        onClick={handleAddTask}
      >Add</button>
    </>
  );
}

export default AddTask;