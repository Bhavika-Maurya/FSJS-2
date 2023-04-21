import React, { useState } from 'react';
import Task from './task';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    setTasks([...tasks, { text: inputValue }]);
    setInputValue('');
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const newTasks = [...tasks];
    const newText = prompt('Enter new task');
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task, index) => (
        <Task key={index} index={index} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default App;
