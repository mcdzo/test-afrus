import { useState } from "react";

const ProblemFour = () => {
  const [arrayOfNumbers, setArrayOfNumbers] = useState([]);
  const [number, setNumber] = useState("");

  const [total, setTotal] = useState("");
  const [evenPercentage, setEvenPercentage] = useState("");
  const [oddPercentage, setOddPercentage] = useState("");
  const [percentage, setPercentage] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [minPercentage, setMinPercentage] = useState("");
  const [avPercentage, setAvPercentage] = useState("");

  const handleInput = (evt) => {
    setNumber(evt.target.value);
  };

  const addToArray = (evt) => {
    evt.preventDefault();
    if (number !== "") {
      setArrayOfNumbers([...arrayOfNumbers, parseInt(number)]);
      setNumber("");
    }
  };

  const evenAndOddPercentage = () => {
    const even = arrayOfNumbers.filter((n) => n % 2 === 0);
    const odd = arrayOfNumbers.filter((n) => n % 2 !== 0);

    let evenPercentage = (even.length / arrayOfNumbers.length) * 100;
    let oddPercentage = (odd.length / arrayOfNumbers.length) * 100;

    return { evenPercentage, oddPercentage };
  };

  const biggerThanThousandPercentage = () => {
    const biggerThanThousand = arrayOfNumbers.filter((n) => n > 1000);

    let percentage = (biggerThanThousand.length / arrayOfNumbers.length) * 100;

    return percentage;
  };

  const maxNumber = () => {
    let max = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (i === 0) {
        max = arrayOfNumbers[i];
      }
      if (arrayOfNumbers[i] > max) {
        max = arrayOfNumbers[i];
      }
    }

    return max;
  };

  const minNumber = () => {
    let min = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (i === 0) {
        min = arrayOfNumbers[i];
      }
      if (arrayOfNumbers[i] < min) {
        min = arrayOfNumbers[i];
      }
    }
    return min;
  };

  const minimumPercentage = (n, max) => {
    let minPercentage = (parseInt(n) / parseInt(max)) * 100;

    return minPercentage;
  };

  const averagePercentage = (max) => {
    let summ = 0;
    let average = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
      summ = summ + arrayOfNumbers[i];
    }

    average = summ / arrayOfNumbers.length;

    let averagePercen = (average / max) * 100;
    return averagePercen;
  };

  const evaluateData = () => {
    const total = arrayOfNumbers.length;
    let { evenPercentage, oddPercentage } = evenAndOddPercentage();
    let percentage = biggerThanThousandPercentage();
    let max = maxNumber();
    let min = minNumber();
    let minPercentage = minimumPercentage(min, max);
    let averagePercen = averagePercentage(max);
  
    setTotal(total);
    setEvenPercentage(evenPercentage);
    setOddPercentage(oddPercentage);
    setPercentage(percentage);
    setMax(max);
    setMin(min);
    setMinPercentage(minPercentage);
    setAvPercentage(averagePercen);
  };

  return (
    <section className="bg-slate-800 text-white w-full h-auto flex flex-col items-center justify-center">
      <h1 className="my-6 text-5xl font-bold">Problema 4</h1>

      <form
        type="submit"
        className="w-full h-24 flex my-6 flex-row items-center justify-center"
      >
        <label className="mx-4">Ingrese numero al array:</label>
        <input
          onChange={handleInput}
          value={number}
          className="mx-4 px-4 w-24 h-10 bg-slate-700"
          type="number"
          min="0"
        ></input>
        <button
          onClick={addToArray}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Agregar numero
        </button>
      </form>
      <span className="text-m w-1/2 h-24 flex flex-row justify-start overflow-x-auto items-center">
        {arrayOfNumbers.map((number, key) => (
          <div className="mr-1" key={key}>
            ({number})
          </div>
        ))}
      </span>
    
      <button
        type="button"
        onClick={evaluateData}
        className="m-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
      >
        Obtener Información
      </button>
      <div className="w-1/2 h-auto px-4 my-2 flex flex-col items-center justify-start bg-slate-600">
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Total: </h2>
          <h2>{total}</h2>
        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Porcentaje pares: </h2>
          <h2>{evenPercentage} %</h2>
        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Porcentaje impares: </h2>
          <h2>{oddPercentage} %</h2>
        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Porcentaje mayor a mil: </h2>
          <h2>{percentage} % </h2>
        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Max: </h2>
          <h2>{max}</h2>
        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
        <h2>Min: </h2>
          <h2>{min}</h2>

        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Porcentaje del minimo: </h2>
          <h2>{minPercentage} %</h2>
        </div>
        <div className="w-full h-1/4  my-2 flex flex-row justify-between text-xl">
          <h2>Porcentaje del promedio: </h2>
          <h2>{avPercentage} %</h2>
        </div>
      </div>
    </section>
  );
};

export default ProblemFour;
