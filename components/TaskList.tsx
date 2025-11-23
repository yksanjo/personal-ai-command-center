'use client';

import { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

export function TaskList() {
  const [tasks, setTasks] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tasks');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse tasks from localStorage', e);
        }
      }
    }
    return [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a task..."
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
            No tasks yet. Add one above!
          </li>
        ) : (
          tasks.map((task, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <span className="text-gray-900 dark:text-white flex-1">{task}</span>
              <button
                onClick={() => deleteTask(i)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors ml-2"
                aria-label="Delete task"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

