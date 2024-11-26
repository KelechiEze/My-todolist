import React, { useState } from 'react';
import todoListImage from "../assets/todoListz.png";
import styles from './header.module.css';

function Header({ onAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === '') return;  
    onAddTask(title)
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <div className={styles.header}>
        <img src={todoListImage} alt="To-do-list" />
      </div>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Header;
