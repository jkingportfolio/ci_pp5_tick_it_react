import React, { useState, useEffect } from 'react';
import axios from 'axios';
import appStyles from "../App.module.css";

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
            if (task.completed === "COMPLETE") {
              counts['Complete'] += 1;
            } else if (task.completed === "IN-PROGRESS") {
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
    <div> 
      <h2 className={appStyles.TextAlignCenter}>Current Task stats</h2>     
    <table className={appStyles.Table}>
      <thead>
        <tr>
          <th className={appStyles.Th}>Status</th>
          <th className={appStyles.Th}>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tasks).map(completed => (
          <tr key={completed}>
            <td className={appStyles.Td}>{completed}</td>
            <td className={appStyles.Td}>{tasks[completed]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TaskStatusTable;