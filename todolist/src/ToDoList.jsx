import React, { useState } from 'react';
import './index.css'; // Main styles for App component

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
       
        <div className="to-do-list">
              <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <br />

            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter Task" value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
              
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            ❌
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
           
            
 
        </div>
    );
}

export default ToDoList;
