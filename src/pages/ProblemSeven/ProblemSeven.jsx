import { useState } from "react";
import Task from "../../components/Task/Task";

const ProblemSeven = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleName = (evt) => {
    setName(evt.target.value);
  };
  const handleDate = (evt) => {
    setDate(evt.target.value);
  };
  const handlePriority = (evt) => {
    setPriority(evt.target.value);
  };
  const handleDescription = (evt) => {
    setDescription(evt.target.value);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * (5000 - 1)) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (name !== "" && date !== "" && priority !== "" && description !== "") {
      const task = {
        name: name,
        date: date,
        priority: priority,
        description: description,
      };

      addTask(task);
      setName("");
      setDate("");
      setPriority("");
      setDescription("");
    }else{
      alert("Hay campos vacíos. (!)")
    }
  };

  const onClean = () => {
    setName("");
    setDate("");
    setPriority("");
    setDescription("");
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="bg-slate-800 text-white w-full h-auto flex flex-col items-center justify-start">
      <div className="w-full h-screen flex flex-col items-center justify-start">
        <h1 className="my-6 text-5xl font-bold">Problema 7</h1>
        <form
          onSubmit={onSubmit}
          type="sumbit"
          className="bg-slate-700 w-1/3 h-5/6 flex flex-col items-center justify-evenly rounded"
        >
          <div className="w-full flex flex-row justify-between items-center">
            <label className="mx-4">Nombre de tarea</label>
            <input
              onChange={handleName}
              value={name}
              className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
              type="text"
            ></input>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <label className="mx-4">Fecha: </label>
            <input
              onChange={handleDate}
              value={date}
              className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
              type="date"
            ></input>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <label className="mx-4">Prioridad: </label>
            <input
              onChange={handlePriority}
              value={priority}
              className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
              type="text"
            ></input>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <label className="mx-4">Descripción: </label>
            <input
              onChange={handleDescription}
              value={description}
              className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
              type="text"
            ></input>
          </div>
         
          <button className="mx-6 px-4 py-2 bg-orange-600 rounded-md hover:bg-orange-500 hover:text-white">
            Agregar Tarea
          </button>
          <button
          type="button"
            onClick={onClean}
            className="mx-6 px-4 py-2 text-white rounded-md hover:text-orange-400"
          >
            Limpiar Formulario
          </button>
        </form>
        
      </div>

      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task key={task.id} tasks={tasks} task={task} onDelete={onDelete} setTasks={setTasks} />
        ))}
    </section>
  );
};

export default ProblemSeven;
