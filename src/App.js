import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TaskCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmit = () => {
    const taskDescription = prompt("Enter task description:");
    if (taskDescription) {
      const updatedTasks = [
        ...tasks,
        { date: selectedDate.toDateString(), description: taskDescription },
      ];
      setTasks(updatedTasks);
    }
  };
  console.log(tasks);
  const tasksForSelectedDate = tasks.filter(
    (task) => task.date === selectedDate.toDateString()
  );
  const removetask = (id) => {
    setTasks(tasks.filter((task) => task.index === tasks.date));
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="text-2xl font-bold mb-4">Task Calendar</h1>
      <div className="mb-4">
        <button
          onClick={handleTaskSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Calendar
            className="border border-gray-300 rounded p-4 w-full h-full"
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">
            Tasks for {selectedDate.toDateString()}
          </h2>
          {tasksForSelectedDate.map((task, index, id) => (
            <div>
              <h1 key={index} className="mb-2">
                {task.description}
              </h1>
              <button
                className="bg-black text-white border-r-2"
                onClick={() => removetask(id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskCalendar;
