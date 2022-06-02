import { useState } from "react";

const ProblemOne = () => {
  const [n1, setN1] = useState(parseInt(0));
  const [n2, setN2] = useState(parseInt(0));
  const [result, setResult] = useState(parseInt(0));

  const handleNumberOne = (evt) => {
    setN1(parseInt(evt.target.value));
  };
  const handleNumberTwo = (evt) => {
    setN2(parseInt(evt.target.value));
  };

  const onSubmit = () => {
    let r = parseInt(0);
    for (let i = 0; i < Math.abs(n2); i++) {
      r = n2 > 0 ? r + n1 : r - n1;
    }
    setResult(r)
    setN1("");
    setN2("");
  };
  return (
    <section className="bg-slate-800 text-white w-5/6 h-full flex flex-col items-center justify-start">
      <h1 className="my-6 text-5xl font-bold">Problema 1</h1>
      <h2 className="my-4 text-xl">Ingrese Dos Numeros a multiplicar</h2>
      <div className="w-full h-24 flex flex-row items-center ">
        <label className="mx-4">Numero 1:</label>
        <input
          onChange={handleNumberOne}
          value={n1}
          className="mx-4 px-4 w-24 h-10 bg-slate-700 "
          type="number"
        ></input>
        <label className="mx-4">Numero 2:</label>
        <input
          onChange={handleNumberTwo}
          value={n2}
          className="mx-4 px-4 w-24 h-10 bg-slate-700"
          type="number"
        ></input>
        <button
          onClick={onSubmit}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Multiplicar
        </button>
        <div>
          <h2>Resultado: {result}</h2>
        </div>
      </div>
    </section>
  );
};

export default ProblemOne;
