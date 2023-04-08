import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VictoryPie } from 'victory';

function TaskPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/tasks/')
      .then(response => {
        const tasks = response.data;
        const completedTasks = tasks.filter(task => task.completed === "COMPLETE");
        const inProgressTasks = tasks.filter(task => task.completed === "IN-PROGRESS");
        const notCompletedTasks = tasks.filter(task => task.completed === "NO");
        setData([
          { x: 'Completed', y: completedTasks.length },
          { x: 'In-Progress', y: inProgressTasks.length },
          { x: 'Not Completed', y: notCompletedTasks.length },
        ]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <VictoryPie
        data={data}
        colorScale={['#36A2EB', '#FF6384']}
        innerRadius={50}
        style={{ labels: { fontSize: 20, fill: 'white' } }}
      />
    </div>
  );
}

export default TaskPieChart;