import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('No');

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  function getFilteredTasks() {
    if (!tasks) {
      return [];
    }
    if (filterStatus === 'Complete') {
      return tasks.filter((task) => task.completed);
    } else if (filterStatus === 'In-Progress') {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  }

  return (
    <div>
      <label>
        Filter by status:{' '}
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="No">No filter</option>
          <option value="Complete">Complete</option>
          <option value="In-Progress">In-Progress</option>
        </select>
      </label>
      <ul>
        {getFilteredTasks().map((task) => (
          <li key={task.id}>
            {task.title} ({task.completed ? 'Complete' : 'In-Progress'})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;