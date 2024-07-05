import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './reducers';
import './App.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.task}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
