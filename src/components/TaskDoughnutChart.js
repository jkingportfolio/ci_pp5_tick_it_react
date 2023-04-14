import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import appStyles from "../App.module.css";

function TaskStatusTable() {
  const [taskCounts, setTaskCounts] = useState({});

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
          } else if (task.completed === "NO") {
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

  const chartData = {
    labels: ["Complete", "No", "In Progress"],
    datasets: [
      {
        label: "Task Status",
        data: [
          taskCounts.complete,
          taskCounts.no,
          taskCounts.inProgress
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2 className={appStyles.TextAlignCenter}>Tasks Chart</h2>
      <div className={appStyles.ChartContainer}>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
}

export default TaskStatusTable;