import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function TaskStatusTable() {
  const [taskCounts, setTaskCounts] = useState({});

  async function getTaskCounts() {
    try {
      const response = await axios.get('/tasks/');
      const tasks = response.data.results;
      const counts = {
        complete: 0,
        no: 0,
        inProgress: 0,
      };
      tasks.map(task => {
        if (task.completed === 'COMPLETE') {
          counts.complete += 1;
        } else if (task.completed === 'NO') {
          counts.no += 1;
        } else if (task.completed === 'IN-PROGRESS') {
          counts.inProgress += 1;
        }
        return null; // Need to return something from the map function
      });
      setTaskCounts(counts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTaskCounts();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Status</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Complete</td>
          <td>{taskCounts.complete}</td>
        </tr>
        <tr>
          <td>No</td>
          <td>{taskCounts.no}</td>
        </tr>
        <tr>
          <td>In Progress</td>
          <td>{taskCounts.inProgress}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TaskStatusTable;