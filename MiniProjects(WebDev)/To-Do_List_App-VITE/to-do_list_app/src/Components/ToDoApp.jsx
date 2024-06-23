import { useEffect, useState } from "react";
import List from "./List";
import icon from "/icon.png";
import { Bounce, Flip, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  /*{
      id: 1,
      text: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      text: "Do DSA",
      completed: false,
    },*/

  const [text, setText] = useState("");

  const LOCAL_STORAGE_KEY = "myTodos";

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTasks) setTasks(storedTasks);
  }, []);

  const addTask = (text) => {
    if (text === "") {
      toast.error("You Must Type Something");
    } else {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      toast.success(`${text} Created Successfully`);

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([...tasks, newTask])
      );

      setText("");
    }
  };

  const deleteTask = (id) => {
    const deletedTask = tasks.find((task) => task.id === id);

    if (deletedTask) {
      const deleted = tasks.filter((task) => task.id !== id);
      setTasks(deleted);

      toast.success(`${deletedTask.text}  Deleted Successfully`);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(deleted));
    }
  };

  const toggleCompleted = (id) => {
    const toggledTask = tasks.find((task) => task.id === id);

    const toggled = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(toggled);

    toast.success(`${toggledTask.text} Toggled Successfully`);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toggled));
  };

  const deleteAll = () => {
    setTasks([]);
    toast.success("All Tasks Deleted Successfully");

    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const countCompletedTask = () => {
    return tasks.filter((task) => task.completed).length;
  };

  return (
    <div className="todo-app">
      <div className="header">
        <h2>
          ToDo List App <img src={icon} />
        </h2>
        <div className="tracker">
          {countCompletedTask()}/{tasks.length}
        </div>
      </div>
      <div className="row">
        <input
          type="text"
          id="input-box"
          placeholder="Add your Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="addbtn" onClick={() => addTask(text)}>
          Add
        </button>
      </div>
      <ul className="list-container">
        {tasks.map((task) => (
          <List
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      {tasks.length !== 0 && (
        <button className="deleteAllBtn" onClick={deleteAll}>
          DeleteAll
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default ToDoApp;
