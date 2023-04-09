import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskCompleteFilter() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks/')
      .then(response => {
        if (Array.isArray(response.data)) {
          // filter the tasks to only include completed tasks
          const completedTasks = response.data.filter(task => task.completed === 'COMPLETE');
          setTasks(completedTasks);
        } else {
          console.error('API response is not an array');
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default TaskCompleteFilter;