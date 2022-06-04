import { useState } from "react";
import { BsTrash, BsPencil, BsCheckLg } from "react-icons/bs";

const Task = ({ task, onDelete, setTasks, tasks }) => {
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [edit, setEdit] = useState(false);

  const editTask = (id) => {
    if (
      id !== "" &&
      newName !== "" &&
      newDate !== "" &&
      newPriority !== "" &&
      newDescription !== ""
    ) {
      
      const editedTask = {
        id: id,
        name: newName,
        date: newDate,
        priority: newPriority,
        description: newDescription,
      };

      const allTasks = tasks.filter((task) => task.id !== id);
      setTasks([...allTasks, editedTask]);
  
      setNewName("");
      setNewDate("");
      setNewPriority("");
      setNewDescription("");
      setEdit(false)
    } else {
      alert("Hay campos vacíos. (!)");
    }
  };
  const onEdit = () => {
    setEdit(!edit);
  };

  return (
    <div
      key={task.id}
      className="w-1/2 h-96 my-2 px-4 flex flex-col items-center justify-center overflow-y-auto bg-slate-600"
    >
      <div className="w-full h-1/4 my-2 flex flex-row justify-between">
        <h2></h2>
        <div className="w-1/3 flex flex-row ">
          {edit && (
            <button
              onClick={() => editTask(task.id)}
              className="mx-2 px-2 text-xl hover:text-green-500"
            >
              <BsCheckLg
                onClick={() =>
                  editTask(
                    task.id,
                    newName,
                    newDate,
                    newPriority,
                    newDescription
                  )
                }
              />
            </button>
          )}
          <button
            onClick={onEdit}
            className="mx-2 px-2 text-xl hover:text-orange-500"
          >
            <BsPencil />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="mx-2 px-2 text-xl hover:text-red-500"
          >
            <BsTrash />
          </button>
        </div>
      </div>
      <div className="w-full h-1/4 my-2 flex flex-row justify-between">
        <h2>Nombre de la tarea: </h2>
        {edit ? (
          <input
            onChange={(evt) => setNewName(evt.target.value)}
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="text"
          ></input>
        ) : (
          <h2>{task.name}</h2>
        )}
      </div>
      <div className="w-full h-1/4 my-2 flex flex-row justify-between">
        <h2>Fecha: </h2>
        {edit ? (
          <input
            onChange={(evt) => setNewDate(evt.target.value)}
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="date"
          ></input>
        ) : (
          <h2> {task.date}</h2>
        )}
      </div>
      <div className="w-full h-1/4 my-2 flex flex-row justify-between">
        <h2>Prioridad: </h2>
        {edit ? (
          <input
            onChange={(evt) => setNewPriority(evt.target.value)}
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="text"
          ></input>
        ) : (
          <h2>{task.priority}</h2>
        )}
      </div>
      <div className="w-full h-1/4 my-2 flex flex-row justify-between">
        <h2>Descripción: </h2>
        {edit ? (
          <input
            onChange={(evt) => setNewDescription(evt.target.value)}
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="text"
          ></input>
        ) : (
          <h2>{task.description}</h2>
        )}
      </div>
    </div>
  );
};

export default Task;
