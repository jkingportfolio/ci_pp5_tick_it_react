import React from 'react';
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import appStyles from "../App.module.css";

function TaskStatusTable() {
  const [taskCounts, setTaskCounts] = useState({});

  /*
  Make API request to get all tasks and create
  a count of the status of each task
  */
  async function getTaskCounts() {
    try {
      let nextPage = "/tasks/";
      const counts = {
        complete: 0,
        no: 0,
        inProgress: 0,
      };

      while (nextPage !== null) {
        const response = await axios.get(nextPage);
        const tasks = response.data.results;

        tasks.forEach((task) => {
          if (task.completed === "COMPLETE") {
            counts.complete += 1;
          } else if (task.completed === "NOT-STARTED") {
            counts.no += 1;
          } else if (task.completed === "IN-PROGRESS") {
            counts.inProgress += 1;
          }
        });

        nextPage = response.data.next;
      }

      setTaskCounts(counts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTaskCounts();
  }, []);

    /*
  Returns a table consisting of the total number of tasks
  by their complete status
  */
  return (
    <div>
      <h2 className={appStyles.TextAlignCenter}>Tasks Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className={appStyles.Th}>Status</th>
            <th className={appStyles.Th}>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={appStyles.Td}>Complete</td>
            <td className={appStyles.Td}>{taskCounts.complete}</td>
          </tr>
          <tr>
            <td className={appStyles.Td}>Incomplete</td>
            <td className={appStyles.Td}>{taskCounts.no}</td>
          </tr>
          <tr>
            <td className={appStyles.Td}>In Progress</td>
            <td className={appStyles.Td}>{taskCounts.inProgress}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TaskStatusTable;
