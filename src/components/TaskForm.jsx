import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-gray-800 p-10 mb-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Create Task</h1>
        <input
          placeholder="Enter a new task"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        />
        <textarea
          placeholder="Enter description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
