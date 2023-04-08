import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskStatusTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tasks/');
        // count tasks by complete field
        const counts = {
          'Complete': 0,
          'In-progress': 0,
          'No': 0,
        };
        if (Array.isArray(response.data)) {
          response.data.forEach(task => {
            if (task.completed === "Complete") {
              counts['Complete'] += 1;
            } else if (task.completed === "In-progress") {
              counts['In-progress'] += 1;
            } else {
              counts['No'] += 1;
            }
          });
        }
        setTasks(counts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tasks).map(status => (
          <tr key={status}>
            <td>{status}</td>
            <td>{tasks[status]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskStatusTable;