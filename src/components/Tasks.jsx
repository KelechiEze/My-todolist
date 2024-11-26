import React from 'react';
import styles from './tasks.module.css';
import Task from './Task';

function Tasks({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className={styles.task}>
      <header className={styles.header}>
        <div>
          <p>Create Tasks</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Completed Tasks</p>
          <span>
            {tasks.filter((task) => task.isCompleted).length} of {tasks.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
