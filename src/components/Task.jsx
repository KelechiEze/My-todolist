import React from 'react';
import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onToggleComplete(task.id)}
      >
        <div className={task.isCompleted ? `${styles.completed}` : ''} />
      </button>

      <p className={task.isCompleted ? styles.completedText : ''}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}

export default Task;
