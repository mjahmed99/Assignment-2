// src/components/TaskList.jsx
import React, { useLayoutEffect, useMemo, useRef, useContext } from 'react';
import { TaskStatsContext } from '../context/TaskStatsContext';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const listRef = useRef();
  const { total, completed } = useContext(TaskStatsContext);

  useLayoutEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [tasks]);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => a.completed - b.completed);
  }, [tasks]);

  return (
    <div className="task-list" ref={listRef}>
      <h3>Tasks ({completed}/{total} completed)</h3>
      {sortedTasks.map((task) => (
        <div key={task.id} className={`task ${task.completed ? 'done' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => onDelete(task.id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
