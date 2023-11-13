import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory }) {
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    filterTasks(selectedCategory);
  }, [selectedCategory, tasks]); // Watch for changes in selectedCategory and tasks

  function handleDelete(deletedItem) {
    const updatedTaskList = tasks.filter((item) => item.text !== deletedItem);
    setFilteredTasks(updatedTaskList);
  }

  function filterTasks(category) {
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      const filteredTaskList = tasks.filter((task) => task.category === category);
      setFilteredTasks(filteredTaskList);
    }
  }

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
