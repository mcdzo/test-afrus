const ProblemSeven = () => {
  return (
    <section className="bg-slate-800 text-white w-full h-screen flex flex-col items-center justify-start">
      <h1 className="my-6 text-5xl font-bold">Problema 7</h1>
      <form
        type="sumbit"
        className="bg-slate-700 w-1/3 h-96 flex flex-col items-center justify-evenly rounded"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <label className="mx-4">Nombre de tarea</label>
          <input
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="text"
          ></input>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <label className="mx-4">Fecha: </label>
          <input
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="date"
          ></input>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <label className="mx-4">Prioridad: </label>
          <input
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="text"
          ></input>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <label className="mx-4">Descripción: </label>
          <input
            className="mx-4 px-4 w-48 h-10 bg-slate-700 border border-black rounded"
            type="text"
          ></input>
        </div>
        <button className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white">
          Agregar Tarea
        </button>
      </form>
      
    </section>
  );
};

export default ProblemSeven;
