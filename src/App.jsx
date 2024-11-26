import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './styles/global.css';

function App() {
  const [tasks, setTasks] = useState([]);


  const toggleComplete = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }, []);

  
  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  
  const addTask = useCallback((taskTitle) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }, []);

  return (
    <> 
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App;
